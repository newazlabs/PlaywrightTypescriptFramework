# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangehrm/orangehrm.hybrid.spec.ts >> OrangeHRM - hybrid API + UI >> TS01 - employee count in UI matches the API
- Location: tests/orangehrm/orangehrm.hybrid.spec.ts:13:9

# Error details

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | import { orangehrmConfig } from '../../config/orangehrm/orangehrm';
  3  | 
  4  | export class LoginPage {
  5  |     readonly page: Page;
  6  |     readonly usernameField: Locator;
  7  |     readonly passwordField: Locator;
  8  |     readonly loginButton: Locator;
  9  |     readonly errorMessage: Locator;
  10 | 
  11 |     constructor(page: Page) {
  12 |         this.page = page;
  13 |         this.usernameField = page.locator('input[name="username"]');
  14 |         this.passwordField = page.locator('input[name="password"]');
  15 |         this.loginButton   = page.locator('button[type="submit"]');
  16 |         this.errorMessage  = page.locator('.oxd-alert-content-text');
  17 |     }
  18 | 
  19 |     async navigate(): Promise<void> {
> 20 |         await this.page.goto(orangehrmConfig.baseUrl);
     |                         ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
  21 |     }
  22 | 
  23 |     async login(username: string, password: string): Promise<void> {
  24 |         await this.usernameField.fill(username);
  25 |         await this.passwordField.fill(password);
  26 |         await this.loginButton.click();
  27 |     }
  28 | }
  29 | 
```