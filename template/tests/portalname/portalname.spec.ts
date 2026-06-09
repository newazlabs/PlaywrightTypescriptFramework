// PURPOSE: This is the actual test file — the only place where test scenarios live.
// It does NOT create Page Objects or deal with locators. It only:
//   1. Imports `test` and `expect` from the fixture file (which provides the page objects).
//   2. Imports `config` to get credentials.
//   3. Describes test scenarios in plain, readable steps using page-object methods.
//
// HOW A TEST RUNS:
//   - Playwright reads the { loginPage, homePage, samplePage } parameters.
//   - It runs the matching fixtures, which create the Page Object instances.
//   - The test body receives those ready-to-use objects and calls their methods.
//   - `expect(...)` assertions verify the outcome.
//
// NAMING CONVENTION:
//   TS01, TS02, … = Test Scenario numbers, useful for tracking in reports.

// TODO: rename import paths from "portalname" to your portal name
import { test, expect }     from '../../fixtures/portalname/portalname';
import { portalnameConfig } from '../../config/portalname/portalname';

// Destructure credentials once at the top so test steps stay readable.
const { standard } = portalnameConfig.users;

test.describe('PortalName', () => {  // TODO: replace with your portal display name e.g. 'Amazon'

    test('TS01 - Full E2E - ', async ({ loginPage, homePage, samplePage }) => {  // TODO: fill in the test title

        // Step 1: Open the site and log in using the LoginPage page object.
        await loginPage.navigate();
        await loginPage.login(standard.username, standard.password);

        // Step 2: Assert the home page loaded by checking its title text.
        expect(await homePage.getPageTitleText()).toBe('');   // TODO: expected title text

        // Step 3: TODO - add your test steps following the pattern below
        // Each step calls a method from a page object — no raw locators here.
        // await homePage.clickSomething();
        // expect(await samplePage.getSomethingText()).toBe('expected value');
    });

});
