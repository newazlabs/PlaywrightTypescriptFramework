import { Page, Locator } from '@playwright/test';

export class DashboardPage {
    private dashboardHeader: Locator;
    private pimMenuLink: Locator;

    constructor(page: Page) {
        this.dashboardHeader = page.locator('.oxd-topbar-header-breadcrumb-module');
        this.pimMenuLink     = page.locator('a[href="/web/index.php/pim/viewPimModule"]');
    }

    async getDashboardHeaderText(): Promise<string> {
        return this.dashboardHeader.innerText();
    }
    async clickPimMenuLink(): Promise<void> {
        await this.pimMenuLink.click();
    }
}
