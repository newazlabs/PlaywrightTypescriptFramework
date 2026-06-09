// PURPOSE: Template for any additional page beyond Home (a product page,
// search results, settings screen, etc.).
// Copy this file, rename it (e.g. 03_ProductsPage.ts), rename the class,
// add the locators for that screen, and add the relevant action/getter methods.
//
// Every page in the user journey gets its own file like this.
// That way each file stays small and focused on just one screen.

// TODO: rename this file and class to match the actual page name e.g. "03_ProductsPage.ts"
import { Page, Locator } from '@playwright/test';

export class SamplePage {
    private pageTitle: Locator;

    constructor(page: Page) {
        this.pageTitle = page.locator('');   // TODO: add locator for the page title/heading
        // TODO: add more locators here
    }

    // Returns the visible heading text so tests can verify this page loaded.
    async getPageTitleText(): Promise<string> {
        return this.pageTitle.innerText();
    }

    // TODO: add more action and getter methods
}
