import { test, expect } from '../src/fixture';

test.describe('Widget Page', () => {

    test.beforeEach('Verify Alerts page navigation', async ({ homepage }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.verifyWidgetCardClick();
    });


    test('Verify navigating Menu page from Widgets page', async ({ widget }) => {
        await widget.verifyMenuPageNavigation();
    });



    test('Verify hovering over Main Item 2 option on Menu page', async ({ widget }) => {
        await widget.verifyMenuPageNavigation();
        await widget.verifyHoveringMenu();
    });



    test('Verify hovering over Submenu under Main Item 2 option on Menu page', async ({ widget }) => {
        await widget.verifyMenuPageNavigation();
        await widget.verifyHoveringMenu();
        await widget.verifyHoveringSubmenu();
    });


    test('Verify navigating Slider page from Widgets page', async ({ widget }) => {
        await widget.verifySliderPageNavigate();
    });



    test('Verify functionality of slider element on Slider page', async ({ widget }) => {
        await widget.verifySliderPageNavigate();
        await widget.verifySliderFunctionality();
    });


    test('Verify functionality of slider element on Slider page using slider value', async ({ widget }) => {
        await widget.verifySliderPageNavigate();
        await widget.verifySliderUsingValue();
    });



    test('Verify navigating Tool Tips page from Widgets page', async ({ widget }) => {
        await widget.verifyTooltipPageNavigation();
    });


    test('Verify hover text of Hover me to see button on Tool Tips page', async ({ widget }) => {
        await widget.verifyTooltipPageNavigation();
        await widget.verifyHoverMeButtonFunctionality();
    });


    test('Verify hover text of Hover me to see Textfield on Tool Tips page', async ({ widget }) => {
        await widget.verifyTooltipPageNavigation();
        await widget.verifyHoverMeTextfieldFunctionality();
    });


    test.skip('Verify hover text of Contrary linked text on Tool Tips page', async ({ widget }) => {
        await widget.verifyTooltipPageNavigation();
        await widget.verifyContraryLinkedTextHover();
    });


    test.skip('Verify hover text of Number(1.10.32) linked text on Tool Tips page', async ({ widget }) => {
        await widget.verifyTooltipPageNavigation();
        await widget.verifyNumberLinkedTextHover();
    });

})