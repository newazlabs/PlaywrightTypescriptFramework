import { Page, Locator } from '@playwright/test';

export class CheckoutOverviewPage {
    readonly pageTitle: Locator;
    readonly itemTotal: Locator;
    readonly taxTotal: Locator;
    readonly orderTotal: Locator;
    readonly finishButton: Locator;

    constructor(page: Page) {
        this.pageTitle    = page.locator('.title');
        this.itemTotal    = page.locator('.summary_subtotal_label');
        this.taxTotal     = page.locator('.summary_tax_label');
        this.orderTotal   = page.locator('.summary_total_label');
        this.finishButton = page.locator('[data-test="finish"]');
    }

    async finishOrder(): Promise<void> {
        await this.finishButton.click();
    }
}
