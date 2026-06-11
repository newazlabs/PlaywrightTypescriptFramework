// Values can be overridden per environment via .env (see .env.example).
export const booksToScrapeConfig = {
    baseUrl: process.env.BOOKSTOSCRAPE_BASE_URL ?? 'https://books.toscrape.com',
};
