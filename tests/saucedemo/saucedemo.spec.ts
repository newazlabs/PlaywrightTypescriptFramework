import { test, expect }      from '../../fixtures/saucedemo/saucedemo';
import { saucedemoConfig }   from '../../config/saucedemo/saucedemo';
import { buildCheckoutInfo } from '../../utils/dataFactory';

const { standard, lockedOut } = saucedemoConfig.users;

// Login tests start from a clean (logged-out) browser.
test.describe('SauceDemo - login', () => {

    test('TS01 - locked out user sees error message', { tag: ['@smoke', '@mobile'] }, async ({ loginPage }) => {
        await loginPage.navigate();
        await loginPage.login(lockedOut.username, lockedOut.password);
        await expect(loginPage.errorMessage).toContainText('locked out');
    });

    test('TS02 - standard user can log in', { tag: ['@smoke', '@mobile'] }, async ({ loginPage, productsPage }) => {
        await loginPage.navigate();
        await loginPage.login(standard.username, standard.password);
        await expect(productsPage.pageTitle).toHaveText('Products');
    });

});

// Shopping tests reuse the session saved by auth.setup.ts, so they start
// already logged in on the products page — no login steps needed.
test.describe('SauceDemo - shopping', () => {
    test.use({ storageState: saucedemoConfig.authFile });

    test.beforeEach(async ({ page }) => {
        await page.goto(`${saucedemoConfig.baseUrl}/inventory.html`);
    });

    test('TS03 - adding and removing an item updates the cart badge', { tag: '@regression' }, async ({ productsPage }) => {
        await productsPage.addBackpackToCart();
        await expect(productsPage.shoppingCartBadge).toHaveText('1');

        await productsPage.removeBackpackFromCart();
        await expect(productsPage.shoppingCartBadge).toBeHidden();
    });

    test('TS04 - checkout requires a first name', { tag: '@regression' }, async ({ productsPage, cartPage, checkoutPage }) => {
        const { lastName, postalCode } = buildCheckoutInfo();

        await productsPage.addBackpackToCart();
        await productsPage.openCart();
        await cartPage.startCheckout();

        await checkoutPage.fillCheckoutInfo('', lastName, postalCode);
        await checkoutPage.continueToOverview();
        await expect(checkoutPage.errorMessage).toContainText('First Name is required');
    });

    test('TS05 - full checkout completes an order', { tag: '@smoke' }, async ({
        productsPage,
        cartPage,
        checkoutPage,
        checkoutOverviewPage,
        checkoutCompletePage,
    }) => {
        const { firstName, lastName, postalCode } = buildCheckoutInfo();

        await productsPage.addBikeLightToCart();
        await productsPage.openCart();
        await expect(cartPage.cartItems).toHaveCount(1);
        await cartPage.startCheckout();

        await checkoutPage.fillCheckoutInfo(firstName, lastName, postalCode);
        await checkoutPage.continueToOverview();

        await expect(checkoutOverviewPage.pageTitle).toHaveText('Checkout: Overview');
        await expect(checkoutOverviewPage.itemTotal).toContainText('$9.99');
        await checkoutOverviewPage.finishOrder();

        await expect(checkoutCompletePage.completeHeader).toHaveText('Thank you for your order!');
    });

});
