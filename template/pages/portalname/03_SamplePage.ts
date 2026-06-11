// PURPOSE: Template for any additional page beyond Home (a product page,
// search results, settings screen, etc.).
// Copy this file, rename it (e.g. 03_ProductsPage.ts), rename the class,
// add the locators for that screen, and add the relevant action methods.
//
// Every page in the user journey gets its own file like this.
// That way each file stays small and focused on just one screen.

// TODO: rename this file and class to match the actual page name e.g. "03_ProductsPage.ts"
import { Page, Locator } from '@playwright/test';

export class SamplePage {
    readonly pageTitle: Locator;

    constructor(page: Page) {
        this.pageTitle = page.locator('');   // TODO: add locator for the page title/heading
        // TODO: add more locators here
    }

    // TODO: add action methods (clicks, fills). Assertions happen in tests:
    //   await expect(samplePage.pageTitle).toHaveText('Expected Title');
}
