import { test, expect } from '../../fixtures/wikipedia/wikipedia';

test.describe('Wikipedia', () => {

    test('TS01 - search shows the matching article', { tag: '@smoke' }, async ({ loginPage, searchPage }) => {
        await loginPage.navigate();
        await searchPage.search('Playwright');
        await expect(searchPage.firstHeading).toContainText('Playwright');
    });

});
