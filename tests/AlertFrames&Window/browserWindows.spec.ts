import { test, expect } from '../../src/fixture';

test.describe('Browser Windows Page', () => {

    test.beforeEach('Verify Upload and Download page navigation', async ({ homepage, browserWindow }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.verifyAlertFrameWindowsCardClick();
        await browserWindow.verifyBrowserWindowNavigate();
    });


    test('Verify functionality of New Window button on Browser Window page', async ({ browserWindow }) => {
        await browserWindow.verifyNewWindowButtonClick();
    });


    test('Verify functionality of New Tab button on Browser Window page', async ({ browserWindow }) => {
        await browserWindow.verifyNewTabButtonClick();
    });


    test('Verify functionality of New Window Message button on Browser Window page', async ({ browserWindow }) => {
        await browserWindow.verifyNewWindowMessageButtonClick();
    });



})