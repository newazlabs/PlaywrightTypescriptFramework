import { Page, Locator } from '@playwright/test';

export class EmployeeListPage {
    readonly pageHeader: Locator;
    readonly searchButton: Locator;
    readonly employeeRows: Locator;
    readonly recordsFound: Locator;

    constructor(page: Page) {
        this.pageHeader   = page.locator('.oxd-topbar-header-breadcrumb-module');
        this.searchButton = page.locator('button[type="submit"]');
        this.employeeRows = page.locator('.oxd-table-row--with-border');
        this.recordsFound = page.getByText(/Records? Found/);
    }

    async searchEmployees(): Promise<void> {
        await this.searchButton.click();
    }
}
