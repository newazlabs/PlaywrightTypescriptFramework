import { test as base } from '@playwright/test';
import { LoginPage }        from '../../pages/orangehrm/01_LoginPage';
import { DashboardPage }    from '../../pages/orangehrm/02_DashboardPage';
import { EmployeeListPage } from '../../pages/orangehrm/03_EmployeeListPage';

type OrangehrmPages = {
    loginPage:        LoginPage;
    dashboardPage:    DashboardPage;
    employeeListPage: EmployeeListPage;
};

export const test = base.extend<OrangehrmPages>({
    loginPage:        async ({ page }, use) => { await use(new LoginPage(page)); },
    dashboardPage:    async ({ page }, use) => { await use(new DashboardPage(page)); },
    employeeListPage: async ({ page }, use) => { await use(new EmployeeListPage(page)); },
});

export { expect } from '@playwright/test';
