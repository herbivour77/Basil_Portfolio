const { getStore } = require('@netlify/blobs');
const { requireAuth } = require('./_auth');

const STORE_NAME = 'portfolio-data';
const KEY = 'state.json';

const MAX_JSON_BYTES = 4.75 * 1024 * 1024;


/* ---------- JSON response helper ---------- */

function json(status, obj){

  return {
    statusCode:status,

    headers:{
      'Content-Type':'application/json',
      'Cache-Control':'no-store',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers':'Content-Type, Authorization',
      'Access-Control-Allow-Methods':'GET, POST, OPTIONS'
    },

    body:JSON.stringify(obj)
  };
}


/* ---------- Function ---------- */

exports.handler = async function(event){

  /*
   * Handle browser preflight requests.
   */
  if(event.httpMethod === 'OPTIONS'){

    return json(204,{});
  }


  /*
   * Netlify automatically provides the
   * site context when getStore() is used
   * from a Netlify Function.
   *
   * DO NOT pass NETLIFY_SITE_ID or
   * NETLIFY_BLOBS_TOKEN here.
   */
  let store;

  try{

    store =
      getStore(STORE_NAME);

  }catch(err){

    console.error(
      'Netlify Blobs initialisation failed:',
      err
    );

    return json(
      500,
      {
        error:
          'Netlify Blobs could not be initialised.',

        detail:
          err &&
          err.message
            ? err.message
            : String(err)
      }
    );
  }


  /* =====================================================
     GET
     Publicly reads the saved portfolio
     ===================================================== */

  if(event.httpMethod === 'GET'){

    try{

      const data =
        await store.get(
          KEY,
          {
            type:'json',
            consistency:'strong'
          }
        );


      /*
       * First visit / no saved portfolio yet.
       */
      if(data === null){

        return json(
          200,
          null
        );
      }


      return json(
        200,
        data
      );

    }catch(err){

      console.error(
        'Portfolio read failed:',
        err
      );

      return json(
        500,
        {
          error:
            'Could not read portfolio data.',

          detail:
            err &&
            err.message
              ? err.message
              : String(err)
        }
      );
    }
  }


  /* =====================================================
     POST
     Admin saves the portfolio
     ===================================================== */

  if(event.httpMethod === 'POST'){

    /*
     * Only authenticated admin users
     * may save data.
     */
    if(!requireAuth(event)){

      return json(
        401,
        {
          error:'Unauthorized'
        }
      );
    }


    /* ---------- Parse request ---------- */

    let body;

    try{

      body =
        JSON.parse(
          event.body || '{}'
        );

    }catch(err){

      return json(
        400,
        {
          error:
            'Invalid JSON request body.'
        }
      );
    }


    /*
     * Only save the expected portfolio
     * structure.
     */
    const toSave = {

      profile:
        body.profile &&
        typeof body.profile === 'object'

          ? body.profile

          : {
              avatar:null
            },


      about:
        body.about &&
        typeof body.about === 'object'

          ? body.about

          : {
              bio:'',
              focus:''
            },


      contact:
        body.contact &&
        typeof body.contact === 'object'

          ? body.contact

          : {
              email:'',
              phone:'',
              location:'',
              website:''
            },


      categories:
        Array.isArray(body.categories)

          ? body.categories

          : []
    };


    /* ---------- Check size ---------- */

    const serialized =
      JSON.stringify(
        toSave
      );


    const bytes =
      Buffer.byteLength(
        serialized,
        'utf8'
      );


    if(bytes > MAX_JSON_BYTES){

      return json(
        413,
        {
          error:
            'Portfolio data is too large to save.',

          detail:
            'Current data is ' +
            (bytes / 1024 / 1024).toFixed(2) +
            ' MB. Netlify Blobs allows up to 5 MB per value.',

          bytes,

          maxBytes:
            MAX_JSON_BYTES
        }
      );
    }


    /* ---------- Save ---------- */

    try{

      const result =
        await store.setJSON(
          KEY,
          toSave
        );


      console.log(
        'Portfolio saved successfully.',
        {
          bytes,
          modified:
            result &&
            result.modified,

          etag:
            result &&
            result.etag
        }
      );


      return json(
        200,
        {
          ok:true,

          saved:true,

          bytes,

          etag:
            result &&
            result.etag
              ? result.etag
              : null
        }
      );

    }catch(err){

      console.error(
        'Portfolio save failed:',
        err
      );


      return json(
        500,
        {
          error:
            'Could not save portfolio data to Netlify Blobs.',

          detail:
            err &&
            err.message
              ? err.message
              : String(err)
        }
      );
    }
  }


  /* ---------- Unsupported method ---------- */

  return json(
    405,
    {
      error:
        'Method not allowed.'
    }
  );
};


exports.config = {
  path:'/api/data'
};
