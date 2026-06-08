import {Page, Locator} from '@playwright/test';

export class ProductsPage{
    private pageTitle:Locator;
    private addToCartBackpackButton: Locator;
    private removeBackpackButton: Locator;
    private addToCartBikeLightButton: Locator;
    private shoppingCartBadge: Locator;
    private shoppingCartLink: Locator;

    constructor(page:Page){
        this.pageTitle = page.locator(".title");
        this.addToCartBackpackButton = page.locator("#add-to-cart-sauce-labs-backpack");
        this.removeBackpackButton = page.locator("#remove-sauce-labs-backpack");
        this.addToCartBikeLightButton = page.locator("#add-to-cart-sauce-labs-bike-light");
        this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    }

    async getPageTitleText(): Promise<string>{
        return this.pageTitle.innerText();
    }
    async getCartBadgeText(): Promise<string>{
        return this.shoppingCartBadge.innerText();
    }
    async isCartBadgeVisible(): Promise<boolean>{
        return this.shoppingCartBadge.isVisible();
    }
    async clickAddToCartBackpackButton(): Promise<void>{
        await this.addToCartBackpackButton.click();
    }
    async clickRemoveBackpackButton(): Promise<void>{
        await this.removeBackpackButton.click();
    }
    async clickAddToCartBikeLightButton(): Promise<void>{
        await this.addToCartBikeLightButton.click();
    }
    async clickShoppingCartLink(): Promise<void>{
        await this.shoppingCartLink.click();
    }
}