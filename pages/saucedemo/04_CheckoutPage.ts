import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
    readonly pageTitle: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly postalCodeField: Locator;
    readonly continueButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.pageTitle       = page.locator('.title');
        this.firstNameField  = page.locator('[data-test="firstName"]');
        this.lastNameField   = page.locator('[data-test="lastName"]');
        this.postalCodeField = page.locator('[data-test="postalCode"]');
        this.continueButton  = page.locator('[data-test="continue"]');
        this.errorMessage    = page.locator('[data-test="error"]');
    }

    async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.postalCodeField.fill(postalCode);
    }
    async continueToOverview(): Promise<void> {
        await this.continueButton.click();
    }
}
