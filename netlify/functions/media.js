const { getStore } = require('@netlify/blobs');
const { requireAuth } = require('./_auth');

const STORE_NAME = 'portfolio-media';

exports.handler = async (event) => {
  const id = event.queryStringParameters && event.queryStringParameters.id;
  if (!id) return { statusCode: 400, body: 'Missing id' };

  const store = getStore(STORE_NAME);

  if (event.httpMethod === 'DELETE') {
    if (!requireAuth(event)) return { statusCode: 401, body: 'Unauthorized' };
    await store.delete(id);
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ok: true }) };
  }

  if (event.httpMethod !== 'GET' && event.httpMethod !== 'HEAD') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  let result;
  try {
    result = await store.getWithMetadata(id, { type: 'arrayBuffer' });
  } catch (e) {
    result = null;
  }
  if (!result || !result.data) return { statusCode: 404, body: 'Not found' };

  const meta = result.metadata || {};
  const buf = Buffer.from(result.data);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': meta.mime || 'application/octet-stream',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Disposition': 'inline; filename="' + (meta.filename || id) + '"'
    },
    body: buf.toString('base64'),
    isBase64Encoded: true
  };
};
