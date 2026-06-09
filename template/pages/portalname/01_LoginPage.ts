// PURPOSE: This is a Page Object for the Login screen.
// A Page Object models one page of the website. It has two responsibilities:
//   1. LOCATORS  — store references to the elements on that page (fields, buttons, etc.)
//   2. METHODS   — expose readable actions (login, enterUsername) and queries (getErrorMessageText)
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

// TODO: rename class "LoginPage" stays the same - no need to rename this one
export class LoginPage {
    private page: Page;

    // Each private field is a locator — a pointer to one element on the page.
    private usernameField: Locator;
    private passwordField: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        // Fill in the selectors for each element below.
        this.usernameField = page.locator('');   // TODO: add locator  e.g. page.locator('#username')
        this.passwordField = page.locator('');   // TODO: add locator  e.g. page.locator('#password')
        this.loginButton   = page.locator('');   // TODO: add locator  e.g. page.locator('#login-btn')
        this.errorMessage  = page.locator('');   // TODO: add locator  e.g. page.locator('.error-msg')
    }

    // --- ACTION METHODS ---
    // These methods perform interactions on the page.
    // Tests call these instead of writing raw Playwright commands.

    async navigate(): Promise<void> {
        // Reads the URL from config so it never needs to be hardcoded here.
        await this.page.goto(portalnameConfig.baseUrl);
    }

    async enterUsername(username: string): Promise<void> {
        await this.usernameField.fill(username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.passwordField.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }

    // Convenience method: combines the three steps above into one call.
    async login(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    // --- GETTER METHODS ---
    // These methods read text or state from the page so tests can assert on it.

    async getErrorMessageText(): Promise<string> {
        return this.errorMessage.innerText();
    }
}
