import { test, expect } from '../../src/fixture';

test.describe('Nested Frames Page', () => {

    test.beforeEach('Nested Frames page navigation', async ({ homepage }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.verifyAlertFrameWindowsCardClick();
        await homepage.verifyNestedFramesOptionClick();
    });


    test('Verify the text on parent frame of Nested Frames page', async ({ nestedFrame }) => {
        await nestedFrame.verifyParentFrameText();
    });


    test('Verify the text on Child frame of Nested Frames page', async ({ nestedFrame }) => {
        await nestedFrame.verifyChildFrameText();
    });
    

})