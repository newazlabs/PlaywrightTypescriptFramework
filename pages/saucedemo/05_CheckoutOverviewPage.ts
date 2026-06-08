import {Page, Locator} from '@playwright/test';

export class CheckoutOverviewPage{
    private pageTitle: Locator;
    private itemTotal: Locator;
    private taxTotal: Locator;
    private orderTotal: Locator;
    private finishButton: Locator;

    constructor(page:Page){
        this.pageTitle = page.locator(".title");
        this.itemTotal = page.locator(".summary_subtotal_label");
        this.taxTotal = page.locator(".summary_tax_label");
        this.orderTotal = page.locator(".summary_total_label");
        this.finishButton = page.locator('[data-test="finish"]');
    }

    async getPageTitleText(): Promise<string>{
        return this.pageTitle.innerText();
    }
    async getItemTotalText(): Promise<string>{
        return this.itemTotal.innerText();
    }
    async getTaxTotalText(): Promise<string>{
        return this.taxTotal.innerText();
    }
    async getOrderTotalText(): Promise<string>{
        return this.orderTotal.innerText();
    }
    async clickFinishButton(): Promise<void>{
        await this.finishButton.click();
    }
}
