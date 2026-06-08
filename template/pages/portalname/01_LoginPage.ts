// TODO: rename import path "portalname" to your portal name
import { Page, Locator } from '@playwright/test';
import { portalnameConfig } from '../../config/portalname/portalname';

// TODO: rename class "LoginPage" stays the same - no need to rename this one
export class LoginPage {
    private page: Page;
    private usernameField: Locator;
    private passwordField: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('');   // TODO: add locator  e.g. page.locator('#username')
        this.passwordField = page.locator('');   // TODO: add locator  e.g. page.locator('#password')
        this.loginButton   = page.locator('');   // TODO: add locator  e.g. page.locator('#login-btn')
        this.errorMessage  = page.locator('');   // TODO: add locator  e.g. page.locator('.error-msg')
    }

    async navigate(): Promise<void> {
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
    async login(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
    async getErrorMessageText(): Promise<string> {
        return this.errorMessage.innerText();
    }
}
