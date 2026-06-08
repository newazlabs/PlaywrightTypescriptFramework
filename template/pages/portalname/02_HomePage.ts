// TODO: rename class "HomePage" to match the actual page name e.g. "DashboardPage"
import { Page, Locator } from '@playwright/test';

export class HomePage {
    private pageTitle: Locator;

    constructor(page: Page) {
        this.pageTitle = page.locator('');   // TODO: add locator for the page title/heading
        // TODO: add more locators here for elements you need to interact with
    }

    async getPageTitleText(): Promise<string> {
        return this.pageTitle.innerText();
    }
    // TODO: add more action and getter methods following the pattern below

    // Action method template:
    // async clickSomething(): Promise<void> {
    //     await this.someButton.click();
    // }

    // Getter method template:
    // async getSomethingText(): Promise<string> {
    //     return this.someElement.innerText();
    // }
}
