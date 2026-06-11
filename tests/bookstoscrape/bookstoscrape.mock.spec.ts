// NETWORK MOCKING: page.route() intercepts requests before they reach the
// real server, so we can test states the live site never shows us — empty
// lists, server errors, slow responses. The UI is real; only the data is fake.
import { test, expect } from '../../fixtures/bookstoscrape/bookstoscrape';
import { booksToScrapeConfig } from '../../config/bookstoscrape/booksToScrapeConfig';

const EMPTY_PAGE_HTML = `
  <html><body>
    <section><div id="messages">No books available right now.</div></section>
  </body></html>
`;

test.describe('Books to Scrape - mocked responses', () => {

    test('TS01 - empty catalogue page shows no books', { tag: '@regression' }, async ({ homePage, page }) => {
        // Serve fake HTML for page 2 instead of the real catalogue.
        await page.route('**/catalogue/page-2.html', (route) =>
            route.fulfill({ status: 200, contentType: 'text/html', body: EMPTY_PAGE_HTML }),
        );

        await homePage.navigate();
        await expect(homePage.bookItems).toHaveCount(20);

        await homePage.goToNextPage();
        await expect(homePage.bookItems).toHaveCount(0);
        await expect(page.locator('#messages')).toContainText('No books available');
    });

    test('TS02 - server error returns status 500', { tag: '@regression' }, async ({ page }) => {
        // Simulate the server failing for page 2.
        await page.route('**/catalogue/page-2.html', (route) =>
            route.fulfill({ status: 500, contentType: 'text/html', body: 'Internal Server Error' }),
        );

        const response = await page.goto(`${booksToScrapeConfig.baseUrl}/catalogue/page-2.html`);
        expect(response?.status()).toBe(500);
    });

});
