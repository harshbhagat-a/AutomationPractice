import { test, expect } from '../../src/fixture';

test.describe('Frames Page', () => {

    test.beforeEach('Verify Alerts page navigation', async ({ homepage }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.verifyAlertFrameWindowsCardClick();
        await homepage.verifyFramesOptionClick();
    });


    test('Verify the text on 1st frame of Frames page', async ({ frames }) => {
        await frames.verifyFirstFrameText();
    });


    test('Verify the text on 2nd frame of Frames page', async ({ frames }) => {
        await frames.verifySecondFrameText();
    });

})