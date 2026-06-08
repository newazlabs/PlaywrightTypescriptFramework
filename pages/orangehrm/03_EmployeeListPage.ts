import { Page, Locator } from '@playwright/test';

export class EmployeeListPage {
    private pageHeader: Locator;
    private searchButton: Locator;
    private employeeRows: Locator;

    constructor(page: Page) {
        this.pageHeader   = page.locator('.oxd-topbar-header-breadcrumb-module');
        this.searchButton = page.locator('button[type="submit"]');
        this.employeeRows = page.locator('.oxd-table-row--with-border');
    }

    async getPageHeaderText(): Promise<string> {
        return this.pageHeader.innerText();
    }
    async clickSearchButton(): Promise<void> {
        await this.searchButton.click();
    }
    async getEmployeeRowCount(): Promise<number> {
        await this.employeeRows.first().waitFor({ state: 'visible' });
        return this.employeeRows.count();
    }
}
