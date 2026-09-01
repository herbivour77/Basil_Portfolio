const { connectLambda, getStore } = require('@netlify/blobs');
const { requireAuth } = require('./_auth');

const STORE_NAME = 'portfolio-media';


/* ---------- JSON response helper ---------- */

function json(status, obj) {
  return {
    statusCode: status,

    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, HEAD, DELETE, OPTIONS'
    },

    body: JSON.stringify(obj)
  };
}


/* ---------- Function ---------- */

exports.handler = async (event) => {

  /*
   * IMPORTANT:
   * Initialise Netlify Blobs using the Lambda event.
   *
   * Without this, getStore() throws:
   * MissingBlobsEnvironmentError
   */
  try {

    connectLambda(event);

  } catch (err) {

    console.error(
      'Netlify Blobs connection failed:',
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


  /* ---------- Handle OPTIONS ---------- */

  if (event.httpMethod === 'OPTIONS') {

    return json(
      204,
      {}
    );
  }


  /* ---------- Get media ID ---------- */

  const id =
    event.queryStringParameters &&
    event.queryStringParameters.id;


  if (!id) {

    return {
      statusCode: 400,

      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-store',
        'Access-Control-Allow-Origin': '*'
      },

      body:
        'Missing id'
    };
  }


  /* ---------- Initialise store ---------- */

  let store;

  try {

    store =
      getStore(
        STORE_NAME
      );

  } catch (err) {

    console.error(
      'Netlify Blobs store initialisation failed:',
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
     DELETE
     Admin only
     ===================================================== */

  if (event.httpMethod === 'DELETE') {

    /*
     * Only authenticated admin users
     * may delete media.
     */
    if (!requireAuth(event)) {

      return {
        statusCode: 401,

        headers: {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*'
        },

        body:
          'Unauthorized'
      };
    }


    try {

      await store.delete(
        id
      );

      console.log(
        'Media deleted successfully.',
        {
          id
        }
      );


      return json(
        200,
        {
          ok: true,
          deleted: true,
          id
        }
      );

    } catch (err) {

      console.error(
        'Media delete failed:',
        err
      );

      return json(
        500,
        {
          error:
            'Could not delete media.',

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
     GET / HEAD
     Public media retrieval
     ===================================================== */

  if (
    event.httpMethod !== 'GET' &&
    event.httpMethod !== 'HEAD'
  ) {

    return {
      statusCode: 405,

      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, HEAD, DELETE, OPTIONS'
      },

      body:
        'Method not allowed'
    };
  }


  /* ---------- Retrieve media ---------- */

  let result;

  try {

    result =
      await store.getWithMetadata(
        id,
        {
          type:
            'arrayBuffer'
        }
      );

  } catch (err) {

    console.error(
      'Media retrieval failed:',
      err
    );

    result =
      null;
  }


  /* ---------- Not found ---------- */

  if (
    !result ||
    !result.data
  ) {

    return {
      statusCode: 404,

      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-store',
        'Access-Control-Allow-Origin': '*'
      },

      body:
        'Not found'
    };
  }


  /* ---------- Metadata ---------- */

  const meta =
    result.metadata || {};


  const mime =
    meta.mime ||
    'application/octet-stream';


  const filename =
    String(
      meta.filename ||
      id
    )
      .replace(/[\r\n"]/g, '_');


  /* ---------- Convert data ---------- */

  const buf =
    Buffer.from(
      result.data
    );


  /* =====================================================
     HEAD
     Return headers only
     ===================================================== */

  if (event.httpMethod === 'HEAD') {

    return {
      statusCode: 200,

      headers: {
        'Content-Type':
          mime,

        'Content-Length':
          String(buf.length),

        'Cache-Control':
          'public, max-age=31536000, immutable',

        'Content-Disposition':
          'inline; filename="' +
          filename +
          '"',

        'Access-Control-Allow-Origin':
          '*'
      },

      body: ''
    };
  }


  /* =====================================================
     GET
     Return actual media
     ===================================================== */

  return {
    statusCode: 200,

    headers: {
      'Content-Type':
        mime,

      'Content-Length':
        String(buf.length),

      'Cache-Control':
        'public, max-age=31536000, immutable',

      'Content-Disposition':
        'inline; filename="' +
        filename +
        '"',

      'Access-Control-Allow-Origin':
        '*'
    },

    body:
      buf.toString(
        'base64'
      ),

    isBase64Encoded:
      true
  };
};
