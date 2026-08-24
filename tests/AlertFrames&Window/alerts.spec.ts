import { test, expect } from '../../src/fixture';

test.describe('Alerts Page', () => {

    test.beforeEach('Verify Alerts page navigation', async ({ homepage, alerts }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.verifyAlertFrameWindowsCardClick();
        await alerts.verifyAlertOptionClick();
    });


    test('Verify text fill on dialog text field for prompt dialog', async ({ alerts }) => {
        await alerts.verifyPromptAlertTextFill();
    });


    test('Verify timer dialog on Alerts page', async ({ alerts }) => {
        await alerts.verifyTimerAlertOkClick();
    });



    test('Verify Ok click on Confirmation dialog of Alerts page', async ({ alerts }) => {
        await alerts.verifyConfirmationAlertOkClick();
    });


    test('Verify Cancel click on Confirmation dialog of Alerts page', async ({ alerts }) => {
        await alerts.verifyConfirmationAlertCancelClick();
    });

})