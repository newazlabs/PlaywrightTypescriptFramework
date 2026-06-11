# CLAUDE.md

Multi-portal Playwright + TypeScript test framework covering UI and API testing.
Each "portal" is one site/API under test; all portals follow the same folder pattern.

## Commands

```bash
npm test                      # full suite, all projects
npm run test:smoke            # @smoke tagged tests only (fast critical path)
npm run test:regression       # @regression tagged tests
npm run test:api              # @api tagged tests (no browser, ~1s)
npm run test:a11y             # accessibility scans (axe-core)
npm run test:visual           # visual regression (skipped in CI; macOS baselines)
npm run test:visual:update    # re-baseline after intentional UI changes
npm run test:mobile           # @mobile tests on Pixel 7 viewport
npm run test:<portal>         # one portal, e.g. test:saucedemo
npm run lint && npm run typecheck   # quality gates (CI runs these first)
npm run new:portal -- <name> [--api]  # scaffold a new portal from template/
npm run test:allure           # run everything + open Allure report
```

Run a single test: `npx playwright test -g "TS05"` or `npx playwright test tests/saucedemo --project=chromium`.

## Architecture

Per portal, four parallel folders (identical structure for every portal):

- `config/<portal>/` — base URL + credentials. Every value reads `process.env.X ?? demoDefault`; secrets go in `.env` (gitignored), never in code.
- `pages/<portal>/` — page objects, numbered by user-journey order (`01_LoginPage.ts`, ...). **Locators are public readonly fields; methods are actions only.** No getter methods — tests assert directly on locators.
- `fixtures/<portal>/` — extends Playwright `test` so page objects (or API clients) arrive as test parameters. Specs import `test`/`expect` from here, never from `@playwright/test` directly.
- `tests/<portal>/` — specs. Small independent tests, tagged `@smoke`/`@regression`/`@api`/`@mobile`/`@a11y`/`@visual`.

API portals add `api/<portal>/` — client classes (one per resource, one method per endpoint) wrapping `APIRequestContext`. See `api/restfulbooker/` for the reference implementation.

Other pieces:
- `utils/dataFactory.ts` — faker-generated unique test data; use for any data that gets persisted.
- `tests/saucedemo/auth.setup.ts` — runs in the `setup` project before all others; saves the logged-in session to `playwright/.auth/saucedemo.json`, which specs load via `test.use({ storageState: saucedemoConfig.authFile })`.
- `template/` — scaffolding source for `new:portal`; not imported by real tests. Excluded from ESLint.
- `playwright.config.ts` projects: `setup` → `chromium` (full suite), `firefox`/`webkit` (@smoke only), `mobile-chrome` (@mobile only).

## Conventions

- Web-first assertions only: `await expect(locator).toHaveText(...)`. Never `expect(await locator.innerText())` — it doesn't retry and is the main flakiness source this framework was built to avoid.
- Test names: `TS01 - description`, scenario numbers per portal.
- New portal = run `npm run new:portal -- <name>`, then fill in the TODOs. Env var names go in `.env.example` too.
- Tests hit live public demo sites (saucedemo.com, opensource-demo.orangehrmlive.com, wikipedia.org, books.toscrape.com, restful-booker.herokuapp.com). OrangeHRM is slow — its tests set 90s timeouts.
- CI (`.github/workflows/playwright.yml`): lint job → 2 sharded test jobs → Allure report merged and published to GitHub Pages. Optional Slack alert on failure if `SLACK_WEBHOOK_URL` secret is set.
