import { test, expect }    from '../../fixtures/orangehrm/orangehrm';
import { orangehrmConfig } from '../../config/orangehrm/orangehrm';

const { admin, invalid } = orangehrmConfig.users;

test.describe('OrangeHRM', () => {

    test('TS01 - Full E2E - login to employee list', async ({
        loginPage,
        dashboardPage,
        employeeListPage,
    }) => {
        test.setTimeout(120000);

        // Invalid login - verify error message
        await loginPage.navigate();
        await loginPage.login(invalid.username, invalid.password);
        expect(await loginPage.getErrorMessageText()).toContain('Invalid credentials');

        // Valid login - verify dashboard
        await loginPage.login(admin.username, admin.password);
        expect(await dashboardPage.getDashboardHeaderText()).toBe('Dashboard');

        // Navigate to PIM - Employee List
        await dashboardPage.clickPimMenuLink();
        expect(await employeeListPage.getPageHeaderText()).toBe('PIM');

        // Search all employees and verify results load
        await employeeListPage.clickSearchButton();
        const count = await employeeListPage.getEmployeeRowCount();
        expect(count).toBeGreaterThan(0);
    });

});
