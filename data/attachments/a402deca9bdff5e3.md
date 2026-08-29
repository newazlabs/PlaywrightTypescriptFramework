# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangehrm/orangehrm.spec.ts >> OrangeHRM >> TS02 - admin can view the employee list
- Location: tests/orangehrm/orangehrm.spec.ts:14:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.oxd-topbar-header-breadcrumb-module')
Expected: "Dashboard"
Received: "Pizarra de pendientes"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.oxd-topbar-header-breadcrumb-module')
    - waiting for navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    6 × locator resolved to <h6 data-v-7b563373="" data-v-c286b6e5="" class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module">Pizarra de pendientes</h6>
      - unexpected value "Pizarra de pendientes"

```

```yaml
- heading "Pizarra de pendientes" [level=6]
```

# Test source

```ts
  1  | import { test, expect }    from '../../fixtures/orangehrm/orangehrm';
  2  | import { orangehrmConfig } from '../../config/orangehrm/orangehrm';
  3  | 
  4  | const { admin, invalid } = orangehrmConfig.users;
  5  | 
  6  | test.describe('OrangeHRM', () => {
  7  | 
  8  |     test('TS01 - invalid credentials show an error', { tag: '@smoke' }, async ({ loginPage }) => {
  9  |         await loginPage.navigate();
  10 |         await loginPage.login(invalid.username, invalid.password);
  11 |         await expect(loginPage.errorMessage).toContainText('Invalid credentials');
  12 |     });
  13 | 
  14 |     test('TS02 - admin can view the employee list', { tag: '@smoke' }, async ({
  15 |         loginPage,
  16 |         dashboardPage,
  17 |         employeeListPage,
  18 |     }) => {
  19 |         // The public OrangeHRM demo server can be slow under load.
  20 |         test.setTimeout(90_000);
  21 | 
  22 |         await loginPage.navigate();
  23 |         await loginPage.login(admin.username, admin.password);
> 24 |         await expect(dashboardPage.dashboardHeader).toHaveText('Dashboard');
     |                                                     ^ Error: expect(locator).toHaveText(expected) failed
  25 | 
  26 |         await dashboardPage.openPimModule();
  27 |         await expect(employeeListPage.pageHeader).toHaveText('PIM');
  28 | 
  29 |         await employeeListPage.searchEmployees();
  30 |         await expect(employeeListPage.employeeRows.first()).toBeVisible();
  31 |     });
  32 | 
  33 | });
  34 | 
```