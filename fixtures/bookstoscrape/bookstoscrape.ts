import { test as base } from '@playwright/test';
  import { HomePage } from '../../pages/bookstoscrape/01_HomePage';
  import { BookPage } from '../../pages/bookstoscrape/02_BookPage';

  type BooksToScrapePages = {
      homePage: HomePage;
      bookPage: BookPage;
  };

  export const test = base.extend<BooksToScrapePages>({
      homePage: async ({ page }, use) => { await use(new HomePage(page)); },
      bookPage: async ({ page }, use) => { await use(new BookPage(page)); },
  });
  
  export { expect } from '@playwright/test';