// TODO: rename import paths from "portalname" to your portal name
import { test, expect }     from '../../fixtures/portalname/portalname';
import { portalnameConfig } from '../../config/portalname/portalname';

const { standard } = portalnameConfig.users;

test.describe('PortalName', () => {  // TODO: replace with your portal display name e.g. 'Amazon'

    test('TS01 - Full E2E - ', async ({ loginPage, homePage, samplePage }) => {  // TODO: fill in the test title
        // Step 1: Navigate and login
        await loginPage.navigate();
        await loginPage.login(standard.username, standard.password);

        // Step 2: Verify home page loaded
        expect(await homePage.getPageTitleText()).toBe('');   // TODO: expected title text

        // Step 3: TODO - add your test steps following the pattern below
        // await homePage.clickSomething();
        // expect(await samplePage.getSomethingText()).toBe('expected value');
    });

});
