// PURPOSE: This file is the glue between Page Objects and test files.
// Playwright's `test.extend` lets you declare custom fixtures — named objects
// that Playwright creates automatically before each test and destroys after.
// Each fixture here instantiates one Page Object and passes it to the test
// via `use(...)`. The test function receives them as named parameters.
//
// HOW IT WORKS:
//   1. A test declares { loginPage } in its parameter list.
//   2. Playwright sees that, runs the loginPage fixture, and calls use(new LoginPage(page)).
//   3. The test runs with a ready-to-use LoginPage instance.
//   4. After the test, Playwright tears it down automatically.
//
// WHY: Keeps test files clean — no "new Page(...)" calls scattered everywhere.
// Add one line here per new page file you create in pages/.

// TODO: rename import paths from "portalname" to your portal name
// TODO: rename "PortalnamePages" and "test" export to match your portal
import { test as base } from '@playwright/test';
import { LoginPage }  from '../../pages/portalname/01_LoginPage';
import { HomePage }   from '../../pages/portalname/02_HomePage';
import { SamplePage } from '../../pages/portalname/03_SamplePage';

// This type lists every page object available as a fixture in tests.
// Add a new entry here whenever you add a new page file.
type PortalnamePages = {
    loginPage:  LoginPage;
    homePage:   HomePage;
    samplePage: SamplePage;
};

// Extend the base Playwright test with our custom page-object fixtures.
// Each fixture receives the built-in `page` (a Playwright browser tab) and
// wraps it inside the matching Page Object class.
export const test = base.extend<PortalnamePages>({
    loginPage:  async ({ page }, use) => { await use(new LoginPage(page)); },
    homePage:   async ({ page }, use) => { await use(new HomePage(page)); },
    samplePage: async ({ page }, use) => { await use(new SamplePage(page)); },
});

// Re-export expect so test files only need one import line.
export { expect } from '@playwright/test';
