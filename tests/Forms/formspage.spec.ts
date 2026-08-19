import { fromSync } from 'node:stream/iter';
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



  test('Verify Date of Birth field click on Practice Forms page', async ({ forms }) => {
    await forms.verifyDOBClick();
  });



  test('Verify Year selection on DOB calender widget', async ({ forms }) => {
    await forms.verifyDOBClick();
    await forms.verifyYearSelection();
  });


  test('Verify Month selection on DOB calender widget', async ({ forms }) => {
    await forms.verifyDOBClick();
    await forms.verifyMonthSelection();
  });



  test('Verify Date selection on DOB calender widget', async ({ forms }) => {
    await forms.verifyDOBClick();
    await forms.verifyDateSelection();
    await expect(forms.dateOfBirthField).toHaveValue(new RegExp(`^${testdata.date}\\s`));
  });


  test('Verify Full selected date on DOB calender widget', async ({ forms }) => {
    await forms.verifyDOBClick();
    await forms.verifyYearSelection();
    await forms.verifyMonthSelection();
    await forms.verifyDateSelection();
    await forms.verifyFullSelectedDate();
    
  });




})