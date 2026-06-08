 import { Page, Locator } from '@playwright/test';

  export class BookPage {
      private bookTitle:  Locator;
      private bookPrice:  Locator;
      private bookRating: Locator;
  
      constructor(page: Page) {
          this.bookTitle  = page.locator('h1');
          this.bookPrice  = page.locator('p.price_color');
          this.bookRating = page.locator('p.star-rating');
      }

      async getTitleText(): Promise<string> {
          return this.bookTitle.innerText();
      }

      async getPriceText(): Promise<string> {
          return this.bookPrice.innerText();
      }
  }