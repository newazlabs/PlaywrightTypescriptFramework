// PURPOSE: Page Object for the Home / Dashboard screen (the page after login).
// Follows the same pattern as 01_LoginPage.ts:
//   - Private fields hold locators for elements on this page.
//   - Public methods expose actions and queries that tests can call.
//
// NUMBER PREFIX (02_): just a reading order hint — it reflects the order
// a user would encounter this page during a normal journey through the site.
// Add new page files as 03_, 04_, etc. for each additional screen.

// TODO: rename class "HomePage" to match the actual page name e.g. "DashboardPage"
import { Page, Locator } from '@playwright/test';

export class HomePage {
    // Add one private field per element you need to interact with or assert on.
    private pageTitle: Locator;

    constructor(page: Page) {
        this.pageTitle = page.locator('');   // TODO: add locator for the page title/heading
        // TODO: add more locators here for elements you need to interact with
    }

    // --- GETTER METHODS ---

    // Returns the visible heading text so tests can assert the right page loaded.
    async getPageTitleText(): Promise<string> {
        return this.pageTitle.innerText();
    }

    // TODO: add more action and getter methods following the pattern below

    // Action method template (clicking a button, filling a field, etc.):
    // async clickSomething(): Promise<void> {
    //     await this.someButton.click();
    // }

    // Getter method template (reading text or state for assertions):
    // async getSomethingText(): Promise<string> {
    //     return this.someElement.innerText();
    // }
}
