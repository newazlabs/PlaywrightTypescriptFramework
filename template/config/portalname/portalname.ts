// PURPOSE: This file stores the portal's base URL and login credentials.
// It is the single source of truth for "where do we go?" and "who logs in?".
// The LoginPage imports baseUrl to know which site to navigate to.
// The test file imports the users object to pass credentials into login().
// You only ever change values here — never hardcode URLs or passwords in tests.

// TODO: rename this file from "portalname.ts" to your portal name e.g. "amazon.ts"
// TODO: rename "portalnameConfig" to match e.g. "amazonConfig"

export const portalnameConfig = {
    baseUrl: "https://www.your-portal-url.com",         // TODO: replace with your portal URL
    users: {
        standard: { username: "your_username", password: "your_password" },   // TODO: replace with real credentials
    }
}
