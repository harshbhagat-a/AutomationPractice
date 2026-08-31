import { test, expect } from '../src/fixture';

test.describe('Widget Page', () => {

    test.beforeEach('Verify Alerts page navigation', async ({ homepage }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.verifyWidgetCardClick();
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