import { test, expect }    from '../../fixtures/saucedemo/saucedemo';
import { saucedemoConfig } from '../../config/saucedemo/saucedemo';

const { standard, lockedOut } = saucedemoConfig.users;
const { firstName, lastName, postalCode } = saucedemoConfig.checkoutInfo;

test.describe('SauceDemo', () => {

    test('TS01 - Full E2E - login to order complete', async ({
        loginPage,
        productsPage,
        cartPage,
        checkoutPage,
        checkoutOverviewPage,
        checkoutCompletePage,
    }) => {
        // Locked out user cannot login
        await loginPage.navigate();
        await loginPage.login(lockedOut.username, lockedOut.password);
        expect(await loginPage.getErrorMessageText()).toContain('locked out');

        // Login with valid user
        await loginPage.login(standard.username, standard.password);
        expect(await productsPage.getPageTitleText()).toBe('Products');

        // Add backpack, go to cart, continue shopping
        await productsPage.clickAddToCartBackpackButton();
        expect(await productsPage.getCartBadgeText()).toBe('1');
        await productsPage.clickShoppingCartLink();
        expect(await cartPage.getCartItemCount()).toBe(1);
        await cartPage.clickContinueShoppingButton();

        // Swap backpack for bike light
        await productsPage.clickRemoveBackpackButton();
        expect(await productsPage.isCartBadgeVisible()).toBe(false);
        await productsPage.clickAddToCartBikeLightButton();
        expect(await productsPage.getCartBadgeText()).toBe('1');

        // Go to cart and start checkout
        await productsPage.clickShoppingCartLink();
        expect(await cartPage.getCartItemCount()).toBe(1);
        await cartPage.clickCheckoutButton();

        // Form validation - missing first name
        await checkoutPage.fillCheckoutInfo('', lastName, postalCode);
        await checkoutPage.clickContinueButton();
        expect(await checkoutPage.getErrorMessageText()).toContain('First Name is required');

        // Fill correct info and continue
        await checkoutPage.fillCheckoutInfo(firstName, lastName, postalCode);
        await checkoutPage.clickContinueButton();

        // Verify overview and complete order
        expect(await checkoutOverviewPage.getPageTitleText()).toBe('Checkout: Overview');
        expect(await checkoutOverviewPage.getItemTotalText()).toContain('$9.99');
        await checkoutOverviewPage.clickFinishButton();

        expect(await checkoutCompletePage.getCompleteHeaderText()).toBe('Thank you for your order!');
    });

});
