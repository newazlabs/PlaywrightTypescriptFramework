import { Page, Locator } from '@playwright/test';

export class DashboardPage {
    readonly dashboardHeader: Locator;
    readonly pimMenuLink: Locator;

    constructor(page: Page) {
        this.dashboardHeader = page.locator('.oxd-topbar-header-breadcrumb-module');
        this.pimMenuLink     = page.locator('a[href="/web/index.php/pim/viewPimModule"]');
    }

    async openPimModule(): Promise<void> {
        await this.pimMenuLink.click();
    }
}
