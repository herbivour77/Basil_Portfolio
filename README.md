# My Portfolio — Netlify + Blobs edition

Your single-file portfolio app, split into a deployable Netlify site with:

- **`/`** — public, **view-only** page. Share this link with anyone.
- **`/admin`** — password-protected editor. Add/edit categories, upload media, connect social posts, edit About/Contact. Changes save automatically to Netlify Blobs and appear instantly on the public page.

No database to set up — everything (your content and uploaded files) lives in **Netlify Blobs**, which is bundled free with every Netlify site.

## 1. One-time setup

You need a free [Netlify](https://netlify.com) account and the Netlify CLI.

```bash
npm install
npm install -g netlify-cli   # if you don't already have it
netlify login
```

## 2. Create the site and deploy

From this project folder:

```bash
netlify init
```

Choose **"Create & configure a new site"** and follow the prompts (pick a team, a site name). This links the folder to a new Netlify site and detects `netlify.toml` automatically (publish dir `public`, functions dir `netlify/functions`).

Then set your admin password as an environment variable (do this in the Netlify dashboard **or** via CLI):

```bash
netlify env:set ADMIN_PASSWORD "choose-a-strong-password"
netlify env:set SESSION_SECRET "any-long-random-string"
```

`SESSION_SECRET` is optional but recommended — it's used to sign admin login sessions. If you skip it, `ADMIN_PASSWORD` is used instead.

Deploy:

```bash
netlify deploy --prod
```

That's it. Netlify will print your live URL, e.g. `https://your-site.netlify.app`.

- Public viewable link: `https://your-site.netlify.app/`
- Your admin link: `https://your-site.netlify.app/admin`

(Alternative: push this folder to a GitHub repo and use "Import from Git" in the Netlify dashboard instead of the CLI — same result, with auto-deploys on every push.)

## 3. Using it

- Go to `/admin`, log in with your password, and edit exactly like before (categories, subcategories, file uploads, social links, About, Contact). A small **Saving… / Saved** indicator in the top bar confirms your changes are persisted.
- Use **Copy Public Link** in the admin header to grab the `/` link to share.
- The public page (`/`) is always read-only — visitors can browse, view media, and use **Export Portfolio** to download a `.zip`, but can't add, edit, or delete anything.

## How it's built

- `public/index.html` + `public/js/app.js` — public view-only page (same UI, edit controls hidden, `previewMode` locked on).
- `public/admin.html` + the same `app.js` — full editor, gated by a login screen.
- `netlify/functions/login.js` — checks `ADMIN_PASSWORD`, issues a signed, time-limited (12h) session token. No password or database is ever exposed to the browser beyond that token.
- `netlify/functions/data.js` — `GET` (public) reads your saved portfolio JSON from Blobs; `POST` (token required) saves it.
- `netlify/functions/upload.js` — `POST` (token required) stores an uploaded file's bytes in Blobs and returns a permanent URL.
- `netlify/functions/media.js` — `GET` (public) streams a stored file back with the right content type; `DELETE` (token required) removes it.

## Limits to know about

- **File size:** uploads are capped around **4.5MB per file** — a Netlify Function request-body limit, not a Blobs limit. If you need larger files (e.g. long videos), let me know and I can switch uploads to Netlify Blobs' direct client upload flow, which removes this ceiling.
- **Sessions:** an admin login lasts 12 hours, then you'll be asked to log in again.
- **One admin password:** this is meant for a single owner/editor. For multiple editors with separate logins, that's a bigger upgrade (real user accounts) — happy to help if you need it.

## Local development

```bash
cp .env.example .env   # fill in your own values
netlify dev
```

This runs the site and functions locally (including a local Blobs emulator) at `http://localhost:8888`.
