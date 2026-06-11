import { Page, Locator } from '@playwright/test';
import { orangehrmConfig } from '../../config/orangehrm/orangehrm';

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('input[name="username"]');
        this.passwordField = page.locator('input[name="password"]');
        this.loginButton   = page.locator('button[type="submit"]');
        this.errorMessage  = page.locator('.oxd-alert-content-text');
    }

    async navigate(): Promise<void> {
        await this.page.goto(orangehrmConfig.baseUrl);
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}
