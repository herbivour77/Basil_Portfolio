const crypto = require('crypto');
const { getStore } = require('@netlify/blobs');
const { requireAuth } = require('./_auth');

const STORE_NAME = 'portfolio-media';
// Netlify Functions have a request body size ceiling (~6MB), and base64 inflates
// bytes by ~33%, so keep comfortably under that.
const MAX_BYTES = 4.5 * 1024 * 1024;

function json(status, obj) {
  return {
    statusCode: status,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(obj)
  };
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });
  if (!requireAuth(event)) return json(401, { error: 'Unauthorized' });

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch (e) {
    return json(400, { error: 'Bad request body.' });
  }

  const { filename, mime, dataBase64 } = body;
  if (!filename || !dataBase64) return json(400, { error: 'filename and dataBase64 are required.' });

  let buf;
  try {
    buf = Buffer.from(dataBase64, 'base64');
  } catch (e) {
    return json(400, { error: 'Invalid base64 data.' });
  }
  if (!buf.length) return json(400, { error: 'Empty file.' });
  if (buf.length > MAX_BYTES) {
    return json(413, { error: 'File too large for this deployment (max ~4.5MB per file).' });
  }

  const id = crypto.randomUUID();
  const store = getStore(STORE_NAME);
  const blob = new Blob([buf], { type: mime || 'application/octet-stream' });
  await store.set(id, blob, {
    metadata: { filename: String(filename), mime: mime || 'application/octet-stream', size: buf.length }
  });

  return json(200, { id, url: '/api/media?id=' + id, filename, mime, size: buf.length });
};
