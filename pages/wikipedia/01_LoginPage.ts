import { Page } from '@playwright/test';
import { wikipediaConfig } from '../../config/wikipedia/wikipediaConfig';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(): Promise<void> {
        await this.page.goto(wikipediaConfig.baseUrl);
    }
}
