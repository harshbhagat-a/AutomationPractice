import { test, expect } from '../src/fixture';

test.describe('Interactions Page', () => {

    test.beforeEach('Nested Frames page navigation', async ({ homepage }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.verifyInteractionsCardClick();
    });


    test('Verify Sortable page navigation', async ({ interactions }) => {
        await interactions.verifySortablePageNavigation();
    });



    test('Verify Grid section navigation from Sortable page', async ({ interactions }) => {
        await interactions.verifySortablePageNavigation();
        await interactions.verifyGridSectionNavigate();
    });


    test('Verify element dragging on Grid section of Sortable page', async ({ interactions }) => {
        await interactions.verifySortablePageNavigation();
        await interactions.verifyGridSectionNavigate();
        await interactions.verifyGridDragAndSort(interactions.gridOne, interactions.gridSix);
    });


    test('Verify Selectable page navigation', async ({ interactions }) => {
        await interactions.verifySelectableNavigation();
    });



    test('Verify selecting an element on List section of Selectable page', async ({ interactions }) => {
        await interactions.verifySelectableNavigation();
        await interactions.verifyListSelect();
    });


    test('Verify navigating Grid section of Selectable page', async ({ interactions }) => {
        await interactions.verifySelectableNavigation();
        await interactions.verifySelectableGridNavigate();
    });


    test('Verify selecting an element on Grid section of Selectable page', async ({ interactions }) => {
        await interactions.verifySelectableNavigation();
        await interactions.verifySelectableGridNavigate();
        await interactions.verifyGridSelect();
    });



    test('Verify Resizable page navigation', async ({ interactions }) => {
        await interactions.verifyResizableNavigation();
    });


    test('Verify resizing an element on Resizable page', async ({ interactions }) => {
        await interactions.verifyResizableNavigation();
        await interactions.verifyResizingElement();
    });


    test('Verify Droppable page navigation', async ({ interactions }) => {
        await interactions.verifyDroppableNavigation();
    });


    test('Verify Accept tab navigation on Droppable page', async ({ interactions }) => {
        await interactions.verifyDroppableNavigation();
        await interactions.verifyAcceptTabNavigation();
    });


    test('Verify drag and drop functionality for droppable element on Accept tab', async ({ interactions }) => {
        await interactions.verifyDroppableNavigation();
        await interactions.verifyAcceptTabNavigation();
        await interactions.verifyDraggingDroppableElement();
    });


    test('Verify drag and drop functionality for unacceptable element on Accept tab', async ({ interactions }) => {
        await interactions.verifyDroppableNavigation();
        await interactions.verifyAcceptTabNavigation();
        await interactions.verifyUnacceptedElementDropping();
    });

    

})