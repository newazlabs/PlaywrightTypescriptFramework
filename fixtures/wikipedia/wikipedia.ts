import { test as base } from '@playwright/test';
  import { LoginPage }  from '../../pages/wikipedia/01_LoginPage';
  import { SearchPage } from '../../pages/wikipedia/02_SearchPage';

  type WikipediaPages = {
      loginPage:  LoginPage;
      searchPage: SearchPage;
  };

  export const test = base.extend<WikipediaPages>({
      loginPage:  async ({ page }, use) => { await use(new LoginPage(page)); },
      searchPage: async ({ page }, use) => { await use(new SearchPage(page)); },
  });

  export { expect } from '@playwright/test';
