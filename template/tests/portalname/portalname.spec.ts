// PURPOSE: This is the actual test file — the only place where test scenarios live.
// It does NOT create Page Objects or deal with locators directly. It only:
//   1. Imports `test` and `expect` from the fixture file (which provides the page objects).
//   2. Imports `config` to get credentials.
//   3. Describes test scenarios in plain, readable steps using page-object
//      methods (actions) and page-object locators (assertions).
//
// ASSERTION STYLE — always "web-first":
//   await expect(homePage.pageTitle).toHaveText('Dashboard');
// expect(locator) auto-retries until the element matches (or times out),
// which removes almost all timing flakiness. Never do:
//   expect(await something.innerText()).toBe(...)   ← grabs text once, flaky
//
// TAGS: add { tag: '@smoke' } to the critical-path tests. CI and local runs
// can then run just the fast smoke suite:  npm run test:smoke
//
// NAMING CONVENTION:
//   TS01, TS02, … = Test Scenario numbers, useful for tracking in reports.

// TODO: rename import paths from "portalname" to your portal name
import { test, expect }     from '../../fixtures/portalname/portalname';
import { portalnameConfig } from '../../config/portalname/portalname';

// Destructure credentials once at the top so test steps stay readable.
const { standard } = portalnameConfig.users;

test.describe('PortalName', () => {  // TODO: replace with your portal display name e.g. 'Amazon'

    test('TS01 - user can log in', { tag: '@smoke' }, async ({ loginPage, homePage }) => {  // TODO: adjust the test title

        // Step 1: Open the site and log in using the LoginPage page object.
        await loginPage.navigate();
        await loginPage.login(standard.username, standard.password);

        // Step 2: Assert the home page loaded — web-first assertion on the locator.
        await expect(homePage.pageTitle).toHaveText('');   // TODO: expected title text

        // Step 3: TODO - add your test steps following the pattern below.
        // Actions call page-object methods; assertions use page-object locators.
        // await homePage.clickSomething();
        // await expect(samplePage.pageTitle).toHaveText('expected value');
    });

    // TODO: add more small, independent tests (TS02, TS03, ...) instead of one
    // giant end-to-end test. Each test must be runnable on its own.

});
