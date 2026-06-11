// VISUAL REGRESSION: toHaveScreenshot() compares the page against a baseline
// image stored next to this file (*-snapshots/). First run creates the
// baseline; later runs fail if the page looks different (threshold is set in
// playwright.config.ts). Update baselines after intentional UI changes with:
//   npx playwright test --update-snapshots tests/bookstoscrape/bookstoscrape.visual.spec.ts
import { test, expect } from '../../fixtures/bookstoscrape/bookstoscrape';

test.describe('Books to Scrape - visual', () => {

    // Screenshots render differently per OS (fonts, anti-aliasing). Baselines
    // here are macOS-generated; generate Linux baselines in CI before enabling.
    test.skip(!!process.env.CI, 'visual baselines are macOS-only for now');

    test('TS01 - home page matches baseline', { tag: '@visual' }, async ({ homePage, page }) => {
        await homePage.navigate();
        await expect(page).toHaveScreenshot('bookstoscrape-home.png', { fullPage: true });
    });

});
