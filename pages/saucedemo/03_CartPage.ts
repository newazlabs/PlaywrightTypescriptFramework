import {Page, Locator} from '@playwright/test';

export class CartPage{
    private pageTitle: Locator;
    private cartItems: Locator;
    private checkoutButton: Locator;
    private continueShoppingButton: Locator;

    constructor(page:Page){
        this.pageTitle = page.locator(".title");
        this.cartItems = page.locator(".cart_item");
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    }

    async getPageTitleText(): Promise<string>{
        return this.pageTitle.innerText();
    }
    async getCartItemCount(): Promise<number>{
        return this.cartItems.count();
    }
    async clickCheckoutButton(): Promise<void>{
        await this.checkoutButton.click();
    }
    async clickContinueShoppingButton(): Promise<void>{
        await this.continueShoppingButton.click();
    }
}
