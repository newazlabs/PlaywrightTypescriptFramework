// PURPOSE: This file stores the portal's base URL and login credentials.
// It is the single source of truth for "where do we go?" and "who logs in?".
// The LoginPage imports baseUrl to know which site to navigate to.
// The test file imports the users object to pass credentials into login().
// You only ever change values here — never hardcode URLs or passwords in tests.
//
// ENVIRONMENT OVERRIDES:
// Every value reads from process.env first (loaded from .env by
// playwright.config.ts) and falls back to a default. This lets you point the
// same tests at dev/staging/prod, and keeps real passwords out of git —
// put them in .env locally and in GitHub Actions secrets in CI.

// TODO: rename this file from "portalname.ts" to your portal name e.g. "amazon.ts"
// TODO: rename "portalnameConfig" to match e.g. "amazonConfig"
// TODO: rename the PORTALNAME_* env vars and add them to .env.example

export const portalnameConfig = {
    baseUrl: process.env.PORTALNAME_BASE_URL ?? 'https://www.your-portal-url.com',   // TODO: replace with your portal URL
    users: {
        standard: {
            username: process.env.PORTALNAME_USERNAME ?? 'your_username',   // TODO: replace with real credentials
            password: process.env.PORTALNAME_PASSWORD ?? 'your_password',
        },
    },
};
