import { test as base } from '@playwright/test';
import { LoginPage }            from '../../pages/saucedemo/01_LoginPage';
import { ProductsPage }         from '../../pages/saucedemo/02_ProductsPage';
import { CartPage }             from '../../pages/saucedemo/03_CartPage';
import { CheckoutPage }         from '../../pages/saucedemo/04_CheckoutPage';
import { CheckoutOverviewPage } from '../../pages/saucedemo/05_CheckoutOverviewPage';
import { CheckoutCompletePage } from '../../pages/saucedemo/06_CheckoutCompletePage';

type SaucedemoPages = {
    loginPage:            LoginPage;
    productsPage:         ProductsPage;
    cartPage:             CartPage;
    checkoutPage:         CheckoutPage;
    checkoutOverviewPage: CheckoutOverviewPage;
    checkoutCompletePage: CheckoutCompletePage;
};

export const test = base.extend<SaucedemoPages>({
    loginPage:            async ({ page }, use) => { await use(new LoginPage(page)); },
    productsPage:         async ({ page }, use) => { await use(new ProductsPage(page)); },
    cartPage:             async ({ page }, use) => { await use(new CartPage(page)); },
    checkoutPage:         async ({ page }, use) => { await use(new CheckoutPage(page)); },
    checkoutOverviewPage: async ({ page }, use) => { await use(new CheckoutOverviewPage(page)); },
    checkoutCompletePage: async ({ page }, use) => { await use(new CheckoutCompletePage(page)); },
});

export { expect } from '@playwright/test';
