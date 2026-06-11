import { Page, Locator } from '@playwright/test';
import { saucedemoConfig } from '../../config/saucedemo/saucedemo';

export class LoginPage {
    readonly page: Page;
    // Locators are public so tests can use web-first assertions that
    // auto-retry, e.g. await expect(loginPage.errorMessage).toContainText(...)
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginButton   = page.locator('#login-button');
        this.errorMessage  = page.locator('[data-test="error"]');
    }

    async navigate(): Promise<void> {
        await this.page.goto(saucedemoConfig.baseUrl);
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}
