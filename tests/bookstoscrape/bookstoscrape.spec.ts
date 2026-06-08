import { test, expect } from '../../fixtures/bookstoscrape/bookstoscrape';

  test.describe('Books to Scrape', () => {

      test('TS01 - Full E2E - browse books and view detail', async ({
          homePage,
          bookPage,
      }) => {
          // Navigate to home page
          await homePage.navigate();

          // Verify 20 books are shown on the first page
          expect(await homePage.getBookCount()).toBe(20);

          // Go to next page and verify 20 books again
          await homePage.clickNextPage();
          expect(await homePage.getBookCount()).toBe(20);
      });

  });