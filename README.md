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

Open the `template/STEPS.txt` file — it walks you through adding a new portal step by step.

The short version:
1. Copy the `template/` folder files and rename from `portalname` to your portal name
2. Fill in the URL and credentials in `config/`
3. Fill in the locators in `pages/`
4. Add your page objects to `fixtures/`
5. Write the test in `tests/`
6. Add a run script in `package.json`

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
