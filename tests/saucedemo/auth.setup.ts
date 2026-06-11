// PURPOSE: Runs once before the test projects (see "setup" project in
// playwright.config.ts). Logs in through the UI a single time and saves the
// session to playwright/.auth/saucedemo.json. Tests that need a logged-in
// user load that file via test.use({ storageState }) and skip the login
// screen entirely — faster and less flaky than logging in per test.
import { test as setup, expect } from '@playwright/test';
import { LoginPage }    from '../../pages/saucedemo/01_LoginPage';
import { ProductsPage } from '../../pages/saucedemo/02_ProductsPage';
import { saucedemoConfig } from '../../config/saucedemo/saucedemo';

setup('authenticate saucedemo standard user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const { standard } = saucedemoConfig.users;

    await loginPage.navigate();
    await loginPage.login(standard.username, standard.password);
    await expect(productsPage.pageTitle).toHaveText('Products');

    await page.context().storageState({ path: saucedemoConfig.authFile });
});
