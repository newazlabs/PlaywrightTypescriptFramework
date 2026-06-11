import { test, expect }    from '../../fixtures/orangehrm/orangehrm';
import { orangehrmConfig } from '../../config/orangehrm/orangehrm';

const { admin, invalid } = orangehrmConfig.users;

test.describe('OrangeHRM', () => {

    test('TS01 - invalid credentials show an error', { tag: '@smoke' }, async ({ loginPage }) => {
        await loginPage.navigate();
        await loginPage.login(invalid.username, invalid.password);
        await expect(loginPage.errorMessage).toContainText('Invalid credentials');
    });

    test('TS02 - admin can view the employee list', { tag: '@smoke' }, async ({
        loginPage,
        dashboardPage,
        employeeListPage,
    }) => {
        // The public OrangeHRM demo server can be slow under load.
        test.setTimeout(90_000);

        await loginPage.navigate();
        await loginPage.login(admin.username, admin.password);
        await expect(dashboardPage.dashboardHeader).toHaveText('Dashboard');

        await dashboardPage.openPimModule();
        await expect(employeeListPage.pageHeader).toHaveText('PIM');

        await employeeListPage.searchEmployees();
        await expect(employeeListPage.employeeRows.first()).toBeVisible();
    });

});
