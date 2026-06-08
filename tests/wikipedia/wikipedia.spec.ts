import { test, expect }      from '../../fixtures/wikipedia/wikipedia';
  import { wikipediaConfig }   from '../../config/wikipedia/wikipediaConfig';

  test.describe('Wikipedia', () => {
  
      test('TS01 - Full E2E - search and verify result', async ({
          loginPage,  
          searchPage,
      }) => {
          // Navigate to Wikipedia
          await loginPage.navigate();

          // Search for Playwright
          await searchPage.search('Playwright');

          // Verify the result page heading
          expect(await searchPage.getHeadingText()).toContain('Playwright');
      });

  });