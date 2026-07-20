# Vercel deployment

## Recommended React deployment

1. Keep `package.json`, `package-lock.json`, `.npmrc`, `.nvmrc`, and `vercel.json` in the repository root.
2. In Vercel Project Settings > Build and Deployment:
   - Framework Preset: Vite
   - Root Directory: leave blank
   - Install Command: leave the dashboard override OFF (the repository `vercel.json` uses `npm ci`)
   - Build Command: leave override OFF
   - Output Directory: leave override OFF
3. Redeploy and choose **Clear build cache and redeploy**.

The repository configuration runs:
- Install: `npm ci --no-audit --no-fund --prefer-online`
- Build: `npm run build`
- Output: `dist`

## No-build fallback

Use the separate static deployment package. It contains the already-built site and skips npm entirely.
