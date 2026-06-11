import { Page, Locator } from '@playwright/test';

export class BookPage {
    readonly bookTitle: Locator;
    readonly bookPrice: Locator;
    readonly bookRating: Locator;

    constructor(page: Page) {
        this.bookTitle  = page.locator('h1');
        this.bookPrice  = page.locator('p.price_color');
        this.bookRating = page.locator('p.star-rating');
    }
}
