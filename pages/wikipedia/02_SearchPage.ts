import { Page, Locator } from '@playwright/test';

  export class SearchPage {
      private searchInput: Locator;
      private searchButton: Locator;
      private firstHeading: Locator;

      constructor(page: Page) {
          this.searchInput  = page.locator('#searchInput');
          this.searchButton = page.locator('button[type="submit"]');
          this.firstHeading = page.locator('#firstHeading');
      }

      async search(term: string): Promise<void> {
          await this.searchInput.fill(term);
          await this.searchButton.click();
      }

      async getHeadingText(): Promise<string> {
          return this.firstHeading.innerText();
      }
  }