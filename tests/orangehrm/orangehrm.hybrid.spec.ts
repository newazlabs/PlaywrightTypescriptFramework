// HYBRID API + UI TEST: after logging in through the UI, page.request shares
// the browser's session cookies — so we can call the app's own REST API
// directly. Here we fetch the employee total from the API and verify the UI
// grid reports the same number. This pattern is also how you SEED data fast:
// create records via API, then only test the screen you care about.
import { test, expect } from '../../fixtures/orangehrm/orangehrm';
import { orangehrmConfig } from '../../config/orangehrm/orangehrm';

const { admin } = orangehrmConfig.users;

test.describe('OrangeHRM - hybrid API + UI', () => {

    test('TS01 - employee count in UI matches the API', { tag: '@regression' }, async ({
        page,
        loginPage,
        dashboardPage,
        employeeListPage,
    }) => {
        // The public OrangeHRM demo server can be slow under load.
        test.setTimeout(90_000);

        // Log in through the UI (gives page.request the session cookie).
        await loginPage.navigate();
        await loginPage.login(admin.username, admin.password);
        await expect(dashboardPage.dashboardHeader).toHaveText('Dashboard');

        // Ask the app's own API how many employees exist.
        const response = await page.request.get(
            `${orangehrmConfig.baseUrl}/web/index.php/api/v2/pim/employees?limit=1&offset=0`,
        );
        expect(response.ok()).toBeTruthy();
        const { meta } = await response.json();
        expect(meta.total).toBeGreaterThan(0);

        // Verify the UI reports the same total.
        await dashboardPage.openPimModule();
        await expect(employeeListPage.recordsFound).toContainText(`(${meta.total}) Record`);
    });

});
