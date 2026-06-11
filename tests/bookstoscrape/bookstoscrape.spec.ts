import { test, expect } from '../../fixtures/bookstoscrape/bookstoscrape';

test.describe('Books to Scrape', () => {

    test('TS01 - browse books across pages', { tag: ['@smoke', '@mobile'] }, async ({ homePage }) => {
        await homePage.navigate();
        await expect(homePage.bookItems).toHaveCount(20);

        await homePage.goToNextPage();
        await expect(homePage.bookItems).toHaveCount(20);
    });

});
