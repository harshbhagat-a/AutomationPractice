import { test, expect } from '../../src/fixture';

test.describe('Draggable Page', () => {

    test.beforeEach('Nested Frames page navigation', async ({ homepage, drag }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.verifyInteractionsCardClick();
        await drag.draggablePageNavigation();
    });


    test('Verify Container Restricted section navigate', async ({ drag }) => {
        await drag.containerRestrictedSectionClick();
    });


    test('Verify text dragging on Container Restricted Page', async ({ drag }) => {
        await drag.containerRestrictedSectionClick();
        await drag.dragElementAndVerifyPosition();
    });


    test('Verify Box dragging on Container Restricted Page', async ({ drag }) => {
        await drag.containerRestrictedSectionClick();
        await drag.verifyDraggableBoxPosition();
    });

    

})