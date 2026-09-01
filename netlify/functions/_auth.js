const crypto = require('crypto');

const TOKEN_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

function secret() {
  const s = process.env.SESSION_SECRET || process.env.ADMIN_PASSWORD || '';
  if (!s) throw new Error('ADMIN_PASSWORD must be set in your Netlify site environment variables');
  return s;
}

function sign(payload) {
  return crypto.createHmac('sha256', secret()).update(payload).digest('hex');
}

function makeToken() {
  const exp = Date.now() + TOKEN_TTL_MS;
  const payload = String(exp);
  const sig = sign(payload);
  return Buffer.from(payload + '.' + sig, 'utf8').toString('base64');
}

function verifyToken(token) {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf8');
    const dot = decoded.lastIndexOf('.');
    if (dot === -1) return false;
    const payload = decoded.slice(0, dot);
    const sig = decoded.slice(dot + 1);
    const expected = sign(payload);
    const sigBuf = Buffer.from(sig, 'hex');
    const expBuf = Buffer.from(expected, 'hex');
    if (sigBuf.length !== expBuf.length) return false;
    if (!crypto.timingSafeEqual(sigBuf, expBuf)) return false;
    const exp = parseInt(payload, 10);
    if (!exp || Number.isNaN(exp) || Date.now() > exp) return false;
    return true;
  } catch (e) {
    return false;
  }
}

function timingSafeEqualStr(a, b) {
  const aBuf = Buffer.from(String(a));
  const bBuf = Buffer.from(String(b));
  if (aBuf.length !== bBuf.length) {
    // Compare against itself to keep timing roughly constant, then fail.
    crypto.timingSafeEqual(aBuf, aBuf);
    return false;
  }
  return crypto.timingSafeEqual(aBuf, bBuf);
}

function requireAuth(event) {
  const headers = event.headers || {};
  const header = headers.authorization || headers.Authorization;
  if (!header || !header.startsWith('Bearer ')) return false;
  const token = header.slice(7).trim();
  return verifyToken(token);
}

module.exports = { makeToken, verifyToken, requireAuth, timingSafeEqualStr, TOKEN_TTL_MS };
