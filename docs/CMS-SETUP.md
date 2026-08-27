# One-time setup: /admin login (Decap CMS + Netlify OAuth, GitHub Pages hosting)

Do this once. After it's done, publishing content is just:
log in at `/admin` with your GitHub account → edit → publish.

**The public website keeps deploying on GitHub Pages exactly as before.**
Netlify is used *only* to host GitHub's OAuth handshake — Decap CMS
needs a small server-side step to exchange a login code for an access
token, and that step can't safely live in a static site. Netlify has
this built in for free, with no custom code, so nothing else about
your hosting changes.

## Step 1 — Create a GitHub OAuth App

1. GitHub → **Settings → Developer settings → OAuth Apps → New OAuth App**.
2. Fill in:
   - **Application name**: `Sayyada Ayesha Portfolio CMS`
   - **Homepage URL**: `https://sayyada-ayesha.github.io/Sayyada_Ayesha-portfolio/`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
3. Save, then generate a **Client Secret**. Keep the Client ID and Client Secret handy — you'll paste them once into Netlify in Step 3 and never need them again.

## Step 2 — Create a Netlify site (auth-only, no hosting change)

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site**.
2. Easiest option: **"Deploy manually"** and drag in any empty folder, or link the same GitHub repo and let it build once — the content of this Netlify site is irrelevant. It is never used to serve your actual portfolio.
3. Note the site's Netlify URL, e.g. `https://sayyada-ayesha-cms-auth.netlify.app`.

## Step 3 — Enable the GitHub OAuth provider on that Netlify site

1. In the Netlify site → **Site configuration → Access control → OAuth**.
2. Click **Install provider** → choose **GitHub**.
3. Paste the **Client ID** and **Client Secret** from Step 1.
4. Save.

Netlify now exposes the OAuth endpoints Decap needs at:
`https://sayyada-ayesha-cms-auth.netlify.app/.netlify/functions/auth` — no custom code required.

## Step 4 — Point Decap CMS at it

Already configured in `public/admin/config.yml` in this repo:

```yaml
backend:
  name: github
  repo: sayyada-ayesha/Sayyada_Ayesha-portfolio
  branch: main
  base_url: https://sayyada-ayesha-cms-auth.netlify.app   # <-- EDIT to your actual Netlify site URL from Step 2
```

Commit that one edit and push — GitHub Actions redeploys automatically.

## Step 5 — Log in

1. Visit `https://sayyada-ayesha.github.io/Sayyada_Ayesha-portfolio/admin/`
2. Click **Login with GitHub**.
3. Authorize the OAuth App the first time.
4. You're in the dashboard.

## One admin, by design

There's no "sign up" here — anyone who authorizes is a GitHub user with
push access to `sayyada-ayesha/Sayyada_Ayesha-portfolio` (in practice,
just the repo owner, since GitHub itself gates repo write access).
Open Authoring is **not** enabled, so no anonymous or public
submissions are possible — every publish is a direct, authenticated
commit to `main` under your own GitHub identity.

## Notes

- No secret is ever stored in this repository, the built site, or `config.yml` — the Client Secret lives only inside Netlify's OAuth provider settings.
- To revoke access later: remove the OAuth App's authorization from your GitHub account, or delete the provider in Netlify's OAuth settings.
- This setup is done once and then left alone — no ongoing maintenance.
