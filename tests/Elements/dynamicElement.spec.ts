import { test, expect } from '../../src/fixture';

test.describe('Dynamic Properties Page', () => {

    test.beforeEach('Verify navigating Dynamic Properties page navigation', async ({ homepage }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.verifyElementsPageNavigate();
        await homepage.verifyDynamicPropertiesNavigate();
    });


    test('Verify Button 1 enabled after 5 section on Dynamic Properties page', async ({ dynamic }) => {
        await dynamic.verifyButtonEnabled();
    });



    test('Verify Button 2 text color after 5 section on Dynamic Properties page', async ({ dynamic }) => {
        await dynamic.verifyButtonTextColorChange();
    });



    test('Verify Button 3 visibility after 5 section on Dynamic Properties page', async ({ dynamic }) => {
        await dynamic.verifyButtonVisibility();
    });

})