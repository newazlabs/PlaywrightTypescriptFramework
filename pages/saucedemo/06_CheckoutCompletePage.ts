import {Page, Locator} from '@playwright/test';

export class CheckoutCompletePage{
    private completeHeader: Locator;
    private completeText: Locator;
    private backToProductsButton: Locator;

    constructor(page:Page){
        this.completeHeader = page.locator('[data-test="complete-header"]');
        this.completeText = page.locator('[data-test="complete-text"]');
        this.backToProductsButton = page.locator('[data-test="back-to-products"]');
    }

    async getCompleteHeaderText(): Promise<string>{
        return this.completeHeader.innerText();
    }
    async getCompleteText(): Promise<string>{
        return this.completeText.innerText();
    }
    async clickBackToProductsButton(): Promise<void>{
        await this.backToProductsButton.click();
    }
}
