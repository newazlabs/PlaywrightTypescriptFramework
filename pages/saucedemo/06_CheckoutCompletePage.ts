import { Page, Locator } from '@playwright/test';

export class CheckoutCompletePage {
    readonly completeHeader: Locator;
    readonly completeText: Locator;
    readonly backToProductsButton: Locator;

    constructor(page: Page) {
        this.completeHeader       = page.locator('[data-test="complete-header"]');
        this.completeText         = page.locator('[data-test="complete-text"]');
        this.backToProductsButton = page.locator('[data-test="back-to-products"]');
    }

    async backToProducts(): Promise<void> {
        await this.backToProductsButton.click();
    }
}
