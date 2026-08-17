import { test, expect } from '../../src/fixture';
import { testdata } from '../../src/utils/testdata';

test.describe('Forms Page', () => {

  test.beforeEach('Verify Practice Form page navigation', async ({ homepage, forms }) => {
    await homepage.verifyHomepageConfirmation();
    await forms.verifyFormsCardClick();
    await forms.verifyPracticeFormNavigate();
  });


  test('Verify elements visible on Practice Forms page', async ({ forms }) => {
    await forms.verifyPracticeFormPageElements();
  });



  test('Verify First name fill on Practice Forms page', async ({ forms }) => {
    await forms.verifyInputFieldFill(forms.firstNameField, testdata.firstName);
  });



  test('Verify Last name fill on Practice Forms page', async ({ forms }) => {
    await forms.verifyInputFieldFill(forms.lastNameField, testdata.lastName);
  });



  test('Verify Email field fill on Practice Forms page', async ({ forms }) => {
    await forms.verifyInputFieldFill(forms.emailField, testdata.email);
  });



  test('Verify Male gender select on Practice Forms page', async ({ forms }) => {
    await forms.verifyRadioButtonClick(forms.maleRadioButton);
  });



  test('Verify Female gender select on Practice Forms page', async ({ forms }) => {
    await forms.verifyRadioButtonClick(forms.femaleRadioButton);
  });



  test('Verify Other gender select on Practice Forms page', async ({ forms }) => {
    await forms.verifyRadioButtonClick(forms.otherRadioButton);
  });



  test('Verify Mobile input field fill on Practice Forms page', async ({ forms }) => {
    await forms.verifyInputFieldFill(forms.mobileInputField, testdata.phoneNo);
  });




})