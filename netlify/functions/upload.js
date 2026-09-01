const crypto = require('crypto');
const { connectLambda, getStore } = require('@netlify/blobs');
const { requireAuth } = require('./_auth');

const STORE_NAME = 'portfolio-media';

// Netlify Functions have a request body size ceiling (~6MB), and base64
// increases the size by roughly 33%, so keep files comfortably below that.
const MAX_BYTES = 4.5 * 1024 * 1024;


/* ---------- JSON response helper ---------- */

function json(status, obj) {
  return {
    statusCode: status,

    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'POST, OPTIONS'
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


  /* ---------- Only POST ---------- */

  if (event.httpMethod !== 'POST') {

    return json(
      405,
      {
        error:
          'Method not allowed.'
      }
    );
  }


  /* ---------- Authentication ---------- */

  if (!requireAuth(event)) {

    return json(
      401,
      {
        error:
          'Unauthorized'
      }
    );
  }


  /* ---------- Parse request ---------- */

  let body;

  try {

    body =
      JSON.parse(
        event.body || '{}'
      );

  } catch (err) {

    console.error(
      'Upload request JSON parsing failed:',
      err
    );

    return json(
      400,
      {
        error:
          'Bad request body.'
      }
    );
  }


  /* ---------- Validate fields ---------- */

  const filename =
    body.filename;

  const mime =
    body.mime ||
    'application/octet-stream';

  const dataBase64 =
    body.dataBase64;


  if (!filename || !dataBase64) {

    return json(
      400,
      {
        error:
          'filename and dataBase64 are required.'
      }
    );
  }


  /* ---------- Decode base64 ---------- */

  let buf;

  try {

    buf =
      Buffer.from(
        dataBase64,
        'base64'
      );

  } catch (err) {

    console.error(
      'Base64 decoding failed:',
      err
    );

    return json(
      400,
      {
        error:
          'Invalid base64 data.'
      }
    );
  }


  /* ---------- Validate file ---------- */

  if (!buf.length) {

    return json(
      400,
      {
        error:
          'Empty file.'
      }
    );
  }


  if (buf.length > MAX_BYTES) {

    return json(
      413,
      {
        error:
          'File too large for this deployment (max ~4.5MB per file).',

        size:
          buf.length,

        maxSize:
          MAX_BYTES
      }
    );
  }


  /* ---------- Create unique ID ---------- */

  const id =
    crypto.randomUUID();


  /* ---------- Get Netlify Blobs store ---------- */

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


  /* ---------- Create blob ---------- */

  const blob =
    new Blob(
      [buf],
      {
        type:
          mime
      }
    );


  /* ---------- Save blob ---------- */

  try {

    await store.set(
      id,
      blob,
      {
        metadata: {
          filename:
            String(filename),

          mime:
            String(mime),

          size:
            buf.length
        }
      }
    );

  } catch (err) {

    console.error(
      'Media upload failed:',
      err
    );

    return json(
      500,
      {
        error:
          'Could not save media to Netlify Blobs.',

        detail:
          err &&
          err.message
            ? err.message
            : String(err)
      }
    );
  }


  /* ---------- Success ---------- */

  console.log(
    'Media uploaded successfully.',
    {
      id,
      filename:
        String(filename),
      mime:
        String(mime),
      size:
        buf.length
    }
  );


  return json(
    200,
    {
      ok:
        true,

      uploaded:
        true,

      id,

      url:
        '/api/media?id=' +
        encodeURIComponent(id),

      filename:
        String(filename),

      mime:
        String(mime),

      size:
        buf.length
    }
  );
};
