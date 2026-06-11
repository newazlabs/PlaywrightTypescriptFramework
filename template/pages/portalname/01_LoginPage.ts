// PURPOSE: This is a Page Object for the Login screen.
// A Page Object models one page of the website. It has two responsibilities:
//   1. LOCATORS — public readonly fields pointing at elements on the page.
//      Tests assert on these directly:  await expect(loginPage.errorMessage).toContainText('...')
//   2. METHODS  — readable actions (navigate, login) that interact with the page.
//
// WHY PUBLIC LOCATORS: Playwright's `expect(locator)` assertions auto-retry
// until the element appears — far more reliable than grabbing text once with
// innerText(). So pages expose locators for ASSERTING and methods for ACTING.
//
// WHY: Tests should never contain raw Playwright locators like page.locator('#user').
// If the site changes a selector, you fix it here in one place, not in every test.
//
// HOW LOCATORS WORK:
//   page.locator('') takes a CSS selector or text selector.
//   Right-click an element in Chrome → Inspect → copy its id, class, or data-test attribute.
//   e.g. page.locator('#username')  or  page.locator('[data-test="user-field"]')

// TODO: rename import path "portalname" to your portal name
import { Page, Locator } from '@playwright/test';
import { portalnameConfig } from '../../config/portalname/portalname';

export class LoginPage {
    readonly page: Page;

    // Each readonly field is a locator — a pointer to one element on the page.
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        // Fill in the selectors for each element below.
        this.usernameField = page.locator('');   // TODO: add locator  e.g. page.locator('#username')
        this.passwordField = page.locator('');   // TODO: add locator  e.g. page.locator('#password')
        this.loginButton   = page.locator('');   // TODO: add locator  e.g. page.locator('#login-btn')
        this.errorMessage  = page.locator('');   // TODO: add locator  e.g. page.locator('.error-msg')
    }

    // --- ACTION METHODS ---
    // These perform interactions. Tests call these instead of raw Playwright commands.

    async navigate(): Promise<void> {
        // Reads the URL from config so it never needs to be hardcoded here.
        await this.page.goto(portalnameConfig.baseUrl);
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    // NOTE: no getter methods needed — tests assert on the public locators:
    //   await expect(loginPage.errorMessage).toContainText('Invalid credentials');
}
