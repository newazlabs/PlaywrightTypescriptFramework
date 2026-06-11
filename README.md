# Playwright Production Framework

Automated end-to-end **UI and API** tests for multiple web portals using Playwright and TypeScript.
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

## Step 3 — (Optional) Configure Environments and Secrets

The project runs out of the box against public demo sites — no setup needed.
To point tests at a different environment or use real credentials:

```bash
cp .env.example .env
```

Then edit `.env` (it is gitignored, so passwords never reach git).
In CI, set the same variables as GitHub Actions secrets.

---

## Step 4 — Run the Tests

**Run all tests and open Allure report:**
```bash
npm run test:allure
```

**Run all tests (no report):**
```bash
npm test
```

**Run by suite:**
```bash
npm run test:smoke        # fast critical-path tests only
npm run test:regression   # deeper coverage (incl. mocked-network + hybrid tests)
npm run test:api          # API tests only (no browser, very fast)
npm run test:mobile       # @mobile tests on a Pixel 7 viewport
npm run test:a11y         # accessibility scans (axe-core)
npm run test:visual       # visual regression vs baseline screenshots
npm run test:visual:update  # re-baseline after intentional UI changes
```

`npm test` runs everything: full suite on Chromium, the @smoke suite again on
Firefox and WebKit, and @mobile tests on a phone viewport.

**Run only one portal:**
```bash
npm run test:saucedemo
npm run test:orangehrm
npm run test:wikipedia
npm run test:bookstoscrape
npm run test:restfulbooker   # API portal
```

**Watch the browser while tests run:**
```bash
npm run test:headed
```

**Run tests slowly (good for debugging):**
```bash
npm run test:slow
```

**Check code quality (same checks CI runs):**
```bash
npm run lint
npm run typecheck
```

---

## Step 5 — View the Report

After running tests, open the Allure report:

```bash
npm run allure:report
```

---

## Step 6 — Add a New UI Portal

**The fast way — one command scaffolds everything:**

```bash
npm run new:portal -- amazon          # UI portal
npm run new:portal -- myapi --api     # also creates an API client template
```

It copies the templates, renames everything, and adds the `test:amazon`
script for you. Then just fill in the TODOs (URL, credentials, locators,
test steps) and run `npm run test:amazon -- --headed`.

**The manual way** (same result, useful for understanding the structure):

**1. Create these folders**
```
config/amazon/
fixtures/amazon/
pages/amazon/
tests/amazon/
```

**2. Create the config file** → `config/amazon/amazon.ts`
Copy from `template/config/portalname/portalname.ts`
Fill in the URL, username, password (use env vars for real secrets)

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
Write small independent tests; assert with `await expect(locator)...`
Tag critical tests with `{ tag: '@smoke' }`

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

## Step 7 — Add a New API Portal

Same idea, but with API clients instead of page objects — no browser involved.
See `api/restfulbooker/` + `tests/restfulbooker/` for a complete working example
(health check, CRUD, token auth).

**1. Create these folders**
```
config/myapi/
api/myapi/
fixtures/myapi/
tests/myapi/
```

**2. Config** → copy `template/config/portalname/portalname.ts`, set the API base URL

**3. API clients** → copy `template/api/portalname/01_SampleApi.ts`
One class per resource (UsersApi, OrdersApi, ...), one method per endpoint

**4. Fixture** → copy `fixtures/restfulbooker/restfulbooker.ts`
Wires each API client around Playwright's built-in `request` fixture

**5. Test file** → `tests/myapi/myapi.api.spec.ts`
Tag tests with `@api` so `npm run test:api` picks them up

**Pro move:** use API clients inside UI tests to create test data instantly
(e.g. create an order via API, then verify it on screen) — much faster and
more reliable than clicking through setup screens.

---

## Project Structure

```
config/       → URLs and credentials for each portal (env-var overridable)
api/          → API clients - one class per resource, one method per endpoint
fixtures/     → Wires up page objects / API clients so tests need no setup
pages/        → Every button, field, and action on each page
tests/        → The actual test scripts (+ auth.setup.ts for session reuse)
utils/        → dataFactory.ts - unique test data via faker
scripts/      → newPortal.js - scaffolds a new portal (npm run new:portal)
template/     → Copy this to add a new portal
playwright/.auth/ → Saved login sessions (generated, gitignored)
```

**Key patterns used:**
- **Web-first assertions** — `await expect(locator).toHaveText(...)` auto-retries; no flaky `innerText()` grabs
- **Session reuse** — `tests/saucedemo/auth.setup.ts` logs in once and saves the session; shopping tests start already logged in
- **Tags** — `@smoke`, `@regression`, `@api`, `@mobile`, `@a11y`, `@visual` for selective runs
- **Unique test data** — `utils/dataFactory.ts` generates fresh names per run
- **Network mocking** — `bookstoscrape.mock.spec.ts` fakes server responses to test empty/error states
- **Hybrid API + UI** — `orangehrm.hybrid.spec.ts` cross-checks UI data against the app's own API
- **Visual regression** — screenshot comparison with committed baselines (`test:visual:update` to re-baseline)
- **Accessibility** — axe-core scans fail on critical WCAG violations, full results attached to reports

---

## CI/CD

Tests run automatically on GitHub Actions:
- Every push to `main`
- Every pull request to `main`
- Every day at 8:00 AM ET

The pipeline: lint + typecheck gate → tests split across **2 parallel shards**
→ Allure results merged and published to the live report link above.

**Slack alerts on failure (optional):** create a Slack Incoming Webhook and add
its URL as a repository secret named `SLACK_WEBHOOK_URL`
(GitHub → Settings → Secrets and variables → Actions). The notify job
activates automatically once the secret exists.
