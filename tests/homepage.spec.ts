import {test, expect} from '../src/fixture';

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


})