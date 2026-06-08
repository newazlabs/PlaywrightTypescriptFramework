import {Page, Locator} from '@playwright/test';

export class CheckoutPage{
    private pageTitle: Locator;
    private firstNameField: Locator;
    private lastNameField: Locator;
    private postalCodeField: Locator;
    private continueButton: Locator;
    private errorMessage: Locator;

    constructor(page:Page){
        this.pageTitle = page.locator(".title");
        this.firstNameField = page.locator('[data-test="firstName"]');
        this.lastNameField = page.locator('[data-test="lastName"]');
        this.postalCodeField = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async getPageTitleText(): Promise<string>{
        return this.pageTitle.innerText();
    }
    async getErrorMessageText(): Promise<string>{
        return this.errorMessage.innerText();
    }
    async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string): Promise<void>{
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.postalCodeField.fill(postalCode);
    }
    async clickContinueButton(): Promise<void>{
        await this.continueButton.click();
    }
}
