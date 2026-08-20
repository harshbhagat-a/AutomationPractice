import { test, expect } from '../src/fixture';

test.describe('Home Page', () => {

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


  test('Verify navigating Frames page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyAlertFrameWindowsCardClick();
    await homepage.verifyFramesOptionClick();
  });



  test('Verify Interactions button click on homepage', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyInteractionsCardClick();
  });

  

  test('Verify Widget section button click on homepage', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyWidgetCardClick();
  });



  test('Verify Elements section button click on homepage', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyElementsPageNavigate();
  });



  test('Verify navigating Dynamic Properties on Elements page', async ({ homepage }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyElementsPageNavigate();
    await homepage.verifyDynamicPropertiesNavigate();
  });



})