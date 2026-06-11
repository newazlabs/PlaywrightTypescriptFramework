import { Page, Locator } from '@playwright/test';

export class CartPage {
    readonly pageTitle: Locator;
    readonly cartItems: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        this.pageTitle              = page.locator('.title');
        this.cartItems              = page.locator('.cart_item');
        this.checkoutButton         = page.locator('[data-test="checkout"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    }

    async startCheckout(): Promise<void> {
        await this.checkoutButton.click();
    }
    async continueShopping(): Promise<void> {
        await this.continueShoppingButton.click();
    }
}
