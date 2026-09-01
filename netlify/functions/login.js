const { makeToken, timingSafeEqualStr, TOKEN_TTL_MS } = require('./_auth');

function json(status, obj) {
  return {
    statusCode: status,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj)
  };
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });

  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    return json(500, { error: 'Server not configured: set ADMIN_PASSWORD in your Netlify site environment variables.' });
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch (e) {
    return json(400, { error: 'Bad request.' });
  }

  if (!body.password || !timingSafeEqualStr(body.password, password)) {
    return json(401, { error: 'Incorrect password.' });
  }

  return json(200, { token: makeToken(), expiresInMs: TOKEN_TTL_MS });
};
