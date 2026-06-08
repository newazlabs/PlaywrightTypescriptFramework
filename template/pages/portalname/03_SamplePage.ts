// TODO: rename this file and class to match the actual page name e.g. "03_ProductsPage.ts"
import { Page, Locator } from '@playwright/test';

export class SamplePage {
    private pageTitle: Locator;

    constructor(page: Page) {
        this.pageTitle = page.locator('');   // TODO: add locator for the page title/heading
        // TODO: add more locators here
    }

    async getPageTitleText(): Promise<string> {
        return this.pageTitle.innerText();
    }
    // TODO: add more action and getter methods
}
