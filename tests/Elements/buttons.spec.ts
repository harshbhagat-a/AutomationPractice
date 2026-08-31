import { test, expect } from '../../src/fixture';

test.describe('Buttons Page', () => {

    test.beforeEach('Verify Buttons page navigation', async ({ homepage, button }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.verifyElementsPageNavigate();
        await button.verifyButtonsNavigate();
    });



    test('Verify Button page elements', async ({ button }) => {
        await button.verifyButtonPageElements();
    });



    test('Verify functionality of Double click button when Single clicked on Buttons page', async ({ button }) => {
        await button.verifyDoubleClickButtonSingleClick();
    });



    test('Verify functionality of Double click button when Double clicked on Buttons page', async ({ button }) => {
        await button.verifyDoubleClickButton();
    });



    test('Verify functionality of Right click button when left clicked on Buttons page', async ({ button }) => {
        await button.verifyRightClickButtonLeftClick();
    });



    test('Verify functionality of Right click button when Right clicked on Buttons page', async ({ button }) => {
        await button.verifyRightClickButton();
    });



    test('Verify functionality of Click Me button on Buttons page', async ({ button }) => {
        await button.verifyClickMeButtonClick();
    });


})