# Playwright Production Framework

Automated end-to-end tests for multiple web portals using Playwright and TypeScript.
Tests run automatically every day at 8 AM ET and results are published online.

**Live Test Report:** https://newazlabs.github.io/PlaywrightProductionFramework/

---

## What You Need First

- [Node.js](https://nodejs.org) installed on your computer
- A terminal (Mac: Terminal, Windows: Command Prompt)

---

## Step 1 — Clone the Project

Download the project to your computer:

```bash
git clone https://github.com/newazlabs/PlaywrightProductionFramework.git
cd PlaywrightProductionFramework
```

---

## Step 2 — Install Dependencies

Install everything the project needs:

```bash
npm install
npx playwright install
```

---

## Step 3 — Run the Tests

**Run all tests and open Allure report:**
```bash
npm run test:allure
```

**Run all tests (no report):**
```bash
npm test
```

**Run only one portal:**
```bash
npm run test:saucedemo
npm run test:orangehrm
```

**Watch the browser while tests run:**
```bash
npm run test:headed
```

**Run tests slowly (good for debugging):**
```bash
npm run test:slow
```

---

## Step 4 — View the Report

After running tests, open the Allure report:

```bash
npm run allure:report
```

---

## Step 5 — Add a New Portal

Follow these 7 steps (using **amazon** as the example):

**1. Create these folders**
```
config/amazon/
fixtures/amazon/
pages/amazon/
tests/amazon/
```

**2. Create the config file** → `config/amazon/amazon.ts`
Copy from `template/config/portalname/portalname.ts`
Fill in the URL, username, password

**3. Create the page files** → `pages/amazon/`
Copy from `template/pages/portalname/`
Rename to `01_LoginPage.ts`, `02_HomePage.ts`, etc.
Fill in the locators (right-click element in Chrome → Inspect → copy id or data-test)
Add more page files (`03_`, `04_` ...) for each new page in the journey

**4. Create the fixture file** → `fixtures/amazon/amazon.ts`
Copy from `template/fixtures/portalname/portalname.ts`
Add one line per page file you created in step 3

**5. Create the test file** → `tests/amazon/amazon.spec.ts`
Copy from `template/tests/portalname/portalname.spec.ts`
Write the test steps using your page objects

**6. Add a run script** → `package.json`
```json
"test:amazon": "playwright test tests/amazon"
```

**7. Run it**
```bash
npm run test:amazon                  (headless)
npm run test:amazon -- --headed      (see the browser)
npm run test:allure                  (run all portals + open Allure report)
```

> Need more detail? Open `template/STEPS.txt` or `template/miniNotes.txt`

---

## Project Structure

```
config/       → URLs and login credentials for each portal
fixtures/     → Wires up page objects so tests don't need manual setup
pages/        → Every button, field, and action on each page
tests/        → The actual test scripts
template/     → Copy this to add a new portal
```

---

## CI/CD

Tests run automatically on GitHub Actions:
- Every push to `main`
- Every pull request to `main`
- Every day at 8:00 AM ET

Results are published to the live report link at the top of this page.
