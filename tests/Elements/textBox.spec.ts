import { text } from 'node:stream/consumers';
import { test, expect } from '../../src/fixture';
import { testdata } from '../../src/utils/testdata';

test.describe('Text Box page', () => {

  test.beforeEach('Verify Text Box page navigation', async ({ homepage, textbox }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyElementsPageNavigate();
    await textbox.verifyTextboxPageNavigation();
  });


  test('Verify elements visible on Text Box page', async ({ textbox }) => {
    await textbox.textBoxPageElements();
  });


  test('Verify Full Name input on Text Box page', async ({ textbox }) => {
    await textbox.verifyFullNameFill();
  });


  test('Verify Email input on Text Box page', async ({ textbox }) => {
    await textbox.verifyEmailFill();
  });



  test('Verify Current Address input on Text Box page', async ({ textbox }) => {
    await textbox.verifyCurrentAddressFill();
  });



  test('Verify Permanent Address input on Text Box page', async ({ textbox }) => {
    await textbox.verifyPermanentAddressFill();
  });



  test('Verify Submit button click after filling data on Text Box page', async ({ textbox }) => {
    await textbox.verifyFullNameFill();
    await textbox.verifyEmailFill();
    await textbox.verifyCurrentAddressFill();
    await textbox.verifyPermanentAddressFill();
    await textbox.verifySubmitButtonClick();
  });




})