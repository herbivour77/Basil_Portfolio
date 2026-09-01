const { getStore } = require('@netlify/blobs');
const { requireAuth } = require('./_auth');

const STORE_NAME = 'portfolio-data';
const KEY = 'state.json';
// Netlify Blobs has a 5 MB per-value limit. Keep a little headroom for the
// JSON value itself so a useful error can be returned instead of a generic
// "Save failed" message.
const MAX_JSON_BYTES = 4.75 * 1024 * 1024;

function json(status, obj) {
  return {
    statusCode: status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store'
    },
    body: JSON.stringify(obj)
  };
}

exports.handler = async (event) => {
  let store;
try {
  store = getStore(STORE_NAME, {
    siteID: process.env.NETLIFY_SITE_ID,
    token: process.env.NETLIFY_BLOBS_TOKEN
  });
} catch (e) {
  console.error('Unable to initialise Netlify Blobs store:', e);
  const missingConfig = /MissingBlobsEnvironmentError|siteID|token/i.test(
    String(e && e.message || e)
  );

  return json(500, {
    error: missingConfig
      ? 'Netlify Blobs is not configured for this Function.'
      : 'Storage is not available.',
    detail: e.message
  });
}

  if (event.httpMethod === 'GET') {
    try {
      const data = await store.get(KEY, { type: 'json' });
      return json(200, data || null);
    } catch (e) {
      // A missing blob is a normal first-run state. Other failures should be
      // surfaced so the admin can be diagnosed instead of silently loading an
      // empty portfolio.
      const message = String(e && e.message || e);
      if (/not found|does not exist|missing/i.test(message)) return json(200, null);
      console.error('Portfolio read failed:', e);
      return json(500, { error: 'Could not read portfolio data.', detail: message });
    }
  }

  if (event.httpMethod === 'POST') {
    if (!requireAuth(event)) return json(401, { error: 'Unauthorized' });

    let body;
    try {
      body = JSON.parse(event.body || '{}');
    } catch (e) {
      return json(400, { error: 'Bad request body.' });
    }

    // Only persist the known, expected shape. Video/social links are stored
    // inside categories[].subs[].items[] and therefore remain intact.
    const toSave = {
      profile: body.profile || { avatar: null },
      about: body.about || { bio: '', focus: '' },
      contact: body.contact || { email: '', phone: '', location: '', website: '' },
      categories: Array.isArray(body.categories) ? body.categories : []
    };

    const serialized = JSON.stringify(toSave);
    const bytes = Buffer.byteLength(serialized, 'utf8');
    if (bytes > MAX_JSON_BYTES) {
      return json(413, {
        error: 'Portfolio data is too large to save.',
        detail: `Current data is ${(bytes / 1024 / 1024).toFixed(2)} MB. Netlify Blobs allows up to 5 MB per value.`,
        bytes,
        maxBytes: MAX_JSON_BYTES
      });
    }

    try {
      const result = await store.setJSON(KEY, toSave);
      console.log('Portfolio saved:', { bytes, modified: result && result.modified, etag: result && result.etag });
      return json(200, { ok: true, bytes, etag: result && result.etag });
    } catch (e) {
      console.error('Portfolio save failed:', e);
      return json(500, {
        error: 'Could not save portfolio data to Netlify Blobs.',
        detail: String(e && e.message || e)
      });
    }
  }

  return json(405, { error: 'Method not allowed' });
};

exports.config = { path: '/api/data' };
