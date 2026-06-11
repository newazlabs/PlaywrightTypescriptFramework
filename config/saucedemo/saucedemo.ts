// Values can be overridden per environment via .env (see .env.example).
// Demo defaults are kept as fallbacks so the project runs out of the box.
const baseUrl  = process.env.SAUCEDEMO_BASE_URL ?? 'https://www.saucedemo.com';
const password = process.env.SAUCEDEMO_PASSWORD ?? 'secret_sauce';

export const saucedemoConfig = {
    baseUrl,
    // Logged-in session saved once by tests/saucedemo/auth.setup.ts and
    // reused by every test that starts past the login screen.
    authFile: 'playwright/.auth/saucedemo.json',
    users: {
        standard:           { username: 'standard_user',           password },
        lockedOut:          { username: 'locked_out_user',         password },
        problem:            { username: 'problem_user',            password },
        performanceGlitch:  { username: 'performance_glitch_user', password },
        error:              { username: 'error_user',              password },
        visual:             { username: 'visual_user',             password },
    },
};
