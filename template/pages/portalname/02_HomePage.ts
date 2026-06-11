// PURPOSE: Page Object for the Home / Dashboard screen (the page after login).
// Follows the same pattern as 01_LoginPage.ts:
//   - Public readonly locators for elements tests assert on.
//   - Public methods for actions (clicks, fills, navigation).
//
// NUMBER PREFIX (02_): just a reading order hint — it reflects the order
// a user would encounter this page during a normal journey through the site.
// Add new page files as 03_, 04_, etc. for each additional screen.

// TODO: rename class "HomePage" to match the actual page name e.g. "DashboardPage"
import { Page, Locator } from '@playwright/test';

export class HomePage {
    // Add one readonly field per element you need to interact with or assert on.
    readonly pageTitle: Locator;

    constructor(page: Page) {
        this.pageTitle = page.locator('');   // TODO: add locator for the page title/heading
        // TODO: add more locators here for elements you need to interact with
    }

    // --- ACTION METHODS ---
    // Tests assert on locators directly (await expect(homePage.pageTitle).toHaveText(...));
    // only add methods for actions, e.g.:
    //
    // async openSettings(): Promise<void> {
    //     await this.settingsButton.click();
    // }
}
