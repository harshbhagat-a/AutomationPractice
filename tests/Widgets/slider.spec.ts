import { test, expect } from '../../src/fixture';

test.describe('Slider Page', () => {


    test.beforeEach('Verify Slider Page navigation', async ({ homepage, slider }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.verifyWidgetCardClick();
        await slider.verifySliderPageNavigate();
    });


    test('Verify functionality of slider element on Slider page', async ({ slider }) => {
        await slider.verifySliderPageNavigate();
        await slider.verifySliderFunctionality();
    });


    test('Verify functionality of slider element on Slider page using slider value', async ({ slider }) => {
        await slider.verifySliderPageNavigate();
        await slider.verifySliderUsingValue();
    });



})