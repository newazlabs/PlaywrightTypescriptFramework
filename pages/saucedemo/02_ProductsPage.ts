import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    readonly pageTitle: Locator;
    readonly shoppingCartBadge: Locator;
    readonly shoppingCartLink: Locator;
    readonly addToCartBackpackButton: Locator;
    readonly removeBackpackButton: Locator;
    readonly addToCartBikeLightButton: Locator;

    constructor(page: Page) {
        this.pageTitle                = page.locator('.title');
        this.shoppingCartBadge        = page.locator('[data-test="shopping-cart-badge"]');
        this.shoppingCartLink         = page.locator('[data-test="shopping-cart-link"]');
        this.addToCartBackpackButton  = page.locator('#add-to-cart-sauce-labs-backpack');
        this.removeBackpackButton     = page.locator('#remove-sauce-labs-backpack');
        this.addToCartBikeLightButton = page.locator('#add-to-cart-sauce-labs-bike-light');
    }

    async addBackpackToCart(): Promise<void> {
        await this.addToCartBackpackButton.click();
    }
    async removeBackpackFromCart(): Promise<void> {
        await this.removeBackpackButton.click();
    }
    async addBikeLightToCart(): Promise<void> {
        await this.addToCartBikeLightButton.click();
    }
    async openCart(): Promise<void> {
        await this.shoppingCartLink.click();
    }
}
