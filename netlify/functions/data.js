const { getStore } = require('@netlify/blobs');
const { requireAuth } = require('./_auth');

const STORE_NAME = 'portfolio-data';
const KEY = 'state.json';

function json(status, obj) {
  return {
    statusCode: status,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(obj)
  };
}

exports.handler = async (event) => {
  const store = getStore(STORE_NAME);

  if (event.httpMethod === 'GET') {
    const data = await store.get(KEY, { type: 'json' }).catch(() => null);
    return json(200, data || null);
  }

  if (event.httpMethod === 'POST') {
    if (!requireAuth(event)) return json(401, { error: 'Unauthorized' });
    let body;
    try {
      body = JSON.parse(event.body || '{}');
    } catch (e) {
      return json(400, { error: 'Bad request body.' });
    }
    // Only persist the known, expected shape.
    const toSave = {
      profile: body.profile || { avatar: null },
      about: body.about || { bio: '', focus: '' },
      contact: body.contact || { email: '', phone: '', location: '', website: '' },
      categories: Array.isArray(body.categories) ? body.categories : []
    };
    await store.setJSON(KEY, toSave);
    return json(200, { ok: true });
  }

  return json(405, { error: 'Method not allowed' });
};
