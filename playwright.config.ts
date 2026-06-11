// Loads .env so configs can read per-environment overrides (see .env.example).
import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results', suiteTitle: false }],
    process.env.CI ? ['github'] : ['list'],
  ],
  expect: {
    // Visual comparisons: tolerate tiny anti-aliasing differences so
    // screenshots don't fail on sub-pixel rendering noise.
    toHaveScreenshot: { maxDiffPixelRatio: 0.02 },
  },
  use: {
    // Failure evidence: trace + screenshot + video make CI failures debuggable
    // without re-running anything.
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    // Fail fast on a stuck element instead of hanging until the test timeout.
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    launchOptions: {
      slowMo: process.env.SLOWMO ? parseInt(process.env.SLOWMO) : 0,
    },
  },
  projects: [
    // Runs every *.setup.ts first (e.g. saucedemo login) and saves session
    // files to playwright/.auth/ for tests to reuse via storageState.
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
    // Primary browser: runs the full suite.
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup'],
    },
    // Cross-browser coverage: firefox/webkit run the @smoke suite only,
    // keeping runs fast while still catching browser-specific breakage.
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      grep: /@smoke/,
      dependencies: ['setup'],
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      grep: /@smoke/,
      dependencies: ['setup'],
    },
    // Mobile viewport: runs only tests tagged @mobile (tag tests that make
    // sense on a small screen).
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 7'] },
      grep: /@mobile/,
      dependencies: ['setup'],
    },
  ],
});
