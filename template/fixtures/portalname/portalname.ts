// TODO: rename import paths from "portalname" to your portal name
// TODO: rename "PortalnamePages" and "test" export to match your portal
import { test as base } from '@playwright/test';
import { LoginPage }  from '../../pages/portalname/01_LoginPage';
import { HomePage }   from '../../pages/portalname/02_HomePage';
import { SamplePage } from '../../pages/portalname/03_SamplePage';

type PortalnamePages = {
    loginPage:  LoginPage;
    homePage:   HomePage;
    samplePage: SamplePage;
};

export const test = base.extend<PortalnamePages>({
    loginPage:  async ({ page }, use) => { await use(new LoginPage(page)); },
    homePage:   async ({ page }, use) => { await use(new HomePage(page)); },
    samplePage: async ({ page }, use) => { await use(new SamplePage(page)); },
});

export { expect } from '@playwright/test';
