// ESLint flat config: TypeScript rules everywhere, plus Playwright-specific
// rules (catches missing awaits on expect, hardcoded waits, etc.) on test code.
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default tseslint.config(
  {
    ignores: [
      'node_modules/**',
      'playwright-report/**',
      'allure-results/**',
      'allure-report/**',
      'test-results/**',
      'template/**',   // templates contain intentional TODO placeholders
    ],
  },
  ...tseslint.configs.recommended,
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**/*.ts', 'pages/**/*.ts', 'fixtures/**/*.ts', 'api/**/*.ts'],
  },
  {
    files: ['tests/**/*.ts'],
    rules: {
      // test.skip(condition, reason) is legitimate, e.g. skipping visual
      // tests in CI until Linux baselines exist.
      'playwright/no-skipped-test': ['warn', { allowConditional: true }],
    },
  },
  {
    // Plain Node.js helper scripts use CommonJS require().
    files: ['scripts/**/*.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
);
