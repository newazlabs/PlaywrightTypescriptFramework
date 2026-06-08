import {Page,Locator} from "@playwright/test";
import { saucedemoConfig } from '../../config/saucedemo/saucedemo';

export class LoginPage {

    private page:Page;
    private usernameField: Locator;
    private passwordField: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;

    constructor(page:Page){
        this.page = page;
        this.usernameField = page.locator("#user-name");
        this.passwordField = page.locator("#password");
        this.loginButton = page.locator("#login-button");
        this.errorMessage = page.locator('[data-test="error"]');
    }
    async navigate(){
        await this.page.goto(saucedemoConfig.baseUrl);
    }

    async enterUsername(username: string){
        await this.usernameField.fill(username);
    }
    async enterPassword(password:string){
        await this.passwordField.fill(password);
    }
    async getErrorMessageText(): Promise<string>{
        return this.errorMessage.innerText();
    }
    async clickLoginButton(){
        await this.loginButton.click();
    }

    async login(username:string, password:string){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }


}