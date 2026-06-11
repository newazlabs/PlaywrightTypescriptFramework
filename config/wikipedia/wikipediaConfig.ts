// Values can be overridden per environment via .env (see .env.example).
export const wikipediaConfig = {
    baseUrl: process.env.WIKIPEDIA_BASE_URL ?? 'https://www.wikipedia.org',
};
