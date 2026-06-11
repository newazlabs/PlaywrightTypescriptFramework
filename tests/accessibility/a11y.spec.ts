// ACCESSIBILITY: axe-core scans the rendered page for WCAG violations.
// We fail only on CRITICAL issues (the full scan is attached to the report
// for review) — public demo sites have plenty of minor findings, and failing
// the suite on those would just be noise.
import { test, expect } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';
import { saucedemoConfig } from '../../config/saucedemo/saucedemo';
import { booksToScrapeConfig } from '../../config/bookstoscrape/booksToScrapeConfig';

const pagesToScan = [
    { name: 'saucedemo login',   url: saucedemoConfig.baseUrl },
    { name: 'bookstoscrape home', url: booksToScrapeConfig.baseUrl },
];

test.describe('Accessibility scans', () => {

    for (const { name, url } of pagesToScan) {
        test(`TS - ${name} has no critical violations`, { tag: '@a11y' }, async ({ page }, testInfo) => {
            await page.goto(url);

            const results = await new AxeBuilder({ page }).analyze();

            // Full results go to the report for manual review.
            await testInfo.attach('axe-full-results', {
                body: JSON.stringify(results.violations, null, 2),
                contentType: 'application/json',
            });

            const critical = results.violations.filter((v) => v.impact === 'critical');
            expect(critical, `critical a11y violations: ${critical.map((v) => v.id).join(', ')}`).toEqual([]);
        });
    }

});
