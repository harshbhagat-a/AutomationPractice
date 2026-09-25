import { test, expect } from '../../src/fixture';

test.describe('Menu Page', () => {


    test.beforeEach('Verify Menu page navigation', async ({ homepage, menu }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.verifyWidgetCardClick();
        await menu.verifyMenuPageNavigation();
    });




    test('Verify hovering over Main Item 2 option on Menu page', async ({ menu }) => {
        await menu.verifyMenuPageNavigation();
        await menu.verifyHoveringMenu();
    });



    test('Verify hovering over Submenu under Main Item 2 option on Menu page', async ({ menu }) => {
        await menu.verifyHoveringMenu();
        await menu.verifyHoveringSubmenu();
    });


    

})