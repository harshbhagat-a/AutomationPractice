import { test, expect } from '../src/fixture';

test.describe('Homepage Functionality', () => {

  test('Verify homepage navigation', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
  });


  test('Verify Alert, Frame and Windows section button click on homepage', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyAlertFrameWindowsCardClick();
  });


  test('Verify Alert option selection on Item selection page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyAlertFrameWindowsCardClick();
    await homepage.verifyAlertOptionClick();
  });


  test('Verify text fill on dialog text field for prompt dialog', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyAlertFrameWindowsCardClick();
    await homepage.verifyAlertOptionClick();
    await homepage.verifyPromptAlertTextFill();
  });


  test('Verify navigating Frames page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyAlertFrameWindowsCardClick();
    await homepage.verifyFramesOptionClick();
  });


  test('Verify the text on 1st frame of Frames page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyAlertFrameWindowsCardClick();
    await homepage.verifyFramesOptionClick();
    await homepage.verifyFirstFrameText();
  });


  test('Verify the text on 2nd frame of Frames page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyAlertFrameWindowsCardClick();
    await homepage.verifyFramesOptionClick();
    await homepage.verifySecondFrameText();
  });


  test('Verify navigating Nested Frames page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyAlertFrameWindowsCardClick();
    await homepage.verifyNestedFramesOptionClick();
  });


  test('Verify the text on parent frame of Nested Frames page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyAlertFrameWindowsCardClick();
    await homepage.verifyNestedFramesOptionClick();
    await homepage.verifyParentFrameText();
  });


  test('Verify the text on Child frame of Nested Frames page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyAlertFrameWindowsCardClick();
    await homepage.verifyNestedFramesOptionClick();
    await homepage.verifyChildFrameText();
  });



  test('Verify Interactions button click on homepage', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyInteractionsCardClick();
  });



  test('Verify Sortable page navigation', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyInteractionsCardClick();
    await homepage.verifySortablePageNavigation();
  });



  test('Verify Grid section navigation from Sortable page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyInteractionsCardClick();
    await homepage.verifySortablePageNavigation();
    await homepage.verifyGridSectionNavigate();
  });


  test('Verify element dragging on Grid section of Sortable page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyInteractionsCardClick();
    await homepage.verifySortablePageNavigation();
    await homepage.verifyGridSectionNavigate();
    await homepage.verifyGridDragAndSort(homepage.gridOne, homepage.gridSix);
  });


  test('Verify Selectable page navigation', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyInteractionsCardClick();
    await homepage.verifySelectableNavigation();
  });



  test('Verify selecting an element on List section of Selectable page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyInteractionsCardClick();
    await homepage.verifySelectableNavigation();
    await homepage.verifyListSelect();
  });


  test('Verify navigating Grid section of Selectable page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyInteractionsCardClick();
    await homepage.verifySelectableNavigation();
    await homepage.verifySelectableGridNavigate()
  });


  test('Verify selecting an element on Grid section of Selectable page', async ({ homepage }) => {
      await homepage.verifyHomepageConfirmation();
      await homepage.verifyInteractionsCardClick();
      await homepage.verifySelectableNavigation();
      await homepage.verifySelectableGridNavigate()
      await homepage.verifyGridSelect();
  });



  test('Verify Resizable page navigation', async ({ homepage }) => {
      await homepage.verifyHomepageConfirmation();
      await homepage.verifyInteractionsCardClick();
      await homepage.verifyResizableNavigation();
  });


  test('Verify resizing an element on Resizable page', async ({ homepage }) => {
      await homepage.verifyHomepageConfirmation();
      await homepage.verifyInteractionsCardClick();
      await homepage.verifyResizableNavigation();
      await homepage.verifyResizingElement();
  });


  test('Verify Droppable page navigation', async ({ homepage }) => {
      await homepage.verifyHomepageConfirmation();
      await homepage.verifyInteractionsCardClick();
      await homepage.verifyDroppableNavigation();
  });


  test('Verify Accept tab navigation on Droppable page', async ({ homepage }) => {
      await homepage.verifyHomepageConfirmation();
      await homepage.verifyInteractionsCardClick();
      await homepage.verifyDroppableNavigation();
      await homepage.verifyAcceptTabNavigation();
  });


  test('Verify drag and drop functionality for droppable element on Accept tab', async ({ homepage }) => {
      await homepage.verifyHomepageConfirmation();
      await homepage.verifyInteractionsCardClick();
      await homepage.verifyDroppableNavigation();
      await homepage.verifyAcceptTabNavigation();
      await homepage.verifyDraggingDroppableElement();
  });


  test('Verify drag and drop functionality for unacceptable element on Accept tab', async ({ homepage }) => {
      await homepage.verifyHomepageConfirmation();
      await homepage.verifyInteractionsCardClick();
      await homepage.verifyDroppableNavigation();
      await homepage.verifyAcceptTabNavigation();
      await homepage.verifyUnacceptedElementDropping();
  });



  test('Verify Widget section button click on homepage', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyWidgetCardClick();
  });



  test('Verify navigating Menu page from Widgets page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyWidgetCardClick();
    await homepage.verifyMenuPageNavigation();
  });



  test('Verify hovering over Main Item 2 option on Menu page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyWidgetCardClick();
    await homepage.verifyMenuPageNavigation();
    await homepage.verifyHoveringMenu();
  });



  test('Verify hovering over Submenu under Main Item 2 option on Menu page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyWidgetCardClick();
    await homepage.verifyMenuPageNavigation();
    await homepage.verifyHoveringMenu();
    await homepage.verifyHoveringSubmenu();
  });


  test('Verify navigating Slider page from Widgets page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyWidgetCardClick();
    await homepage.verifySliderPageNavigate();
  });



  test('Verify functionality of slider element on Slider page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyWidgetCardClick();
    await homepage.verifySliderPageNavigate();
    await homepage.verifySliderFunctionality();
  });


  test('Verify functionality of slider element on Slider page using slider value', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyWidgetCardClick();
    await homepage.verifySliderPageNavigate();
    await homepage.verifySliderUsingValue();
  });



  test('Verify navigating Tool Tips page from Widgets page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyWidgetCardClick();
    await homepage.verifyTooltipPageNavigation();
  });


  test('Verify hover text of Hover me to see button on Tool Tips page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyWidgetCardClick();
    await homepage.verifyTooltipPageNavigation();
    await homepage.verifyHoverMeButtonFunctionality();
  });


  test('Verify hover text of Hover me to see Textfield on Tool Tips page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyWidgetCardClick();
    await homepage.verifyTooltipPageNavigation();
    await homepage.verifyHoverMeTextfieldFunctionality();
  });


  test('Verify hover text of Contrary linked text on Tool Tips page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyWidgetCardClick();
    await homepage.verifyTooltipPageNavigation();
    await homepage.verifyContraryLinkedTextHover();
  });


  test('Verify hover text of Number(1.10.32) linked text on Tool Tips page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyWidgetCardClick();
    await homepage.verifyTooltipPageNavigation();
    await homepage.verifyNumberLinkedTextHover();
  });

})