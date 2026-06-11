import { Page, Locator } from '@playwright/test';
import { booksToScrapeConfig } from '../../config/bookstoscrape/booksToScrapeConfig';

export class HomePage {
    readonly page: Page;
    readonly bookItems: Locator;
    readonly nextButton: Locator;

    constructor(page: Page) {
        this.page       = page;
        this.bookItems  = page.locator('article.product_pod');
        this.nextButton = page.locator('li.next a');
    }

    async navigate(): Promise<void> {
        await this.page.goto(booksToScrapeConfig.baseUrl);
    }

    async goToNextPage(): Promise<void> {
        await this.nextButton.click();
    }
}
