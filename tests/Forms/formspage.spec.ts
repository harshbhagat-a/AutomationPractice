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


  test('Verify Subject input field fill on Practice Forms page', async ({ forms }) => {
    await forms.verifyInputFieldFill(forms.subjectField, testdata.subject);
  });


  test('Verify Sports checkbox click under hobbies section on Practice Forms page', async ({ forms }) => {
    await forms.verifyCheckboxClick(forms.sportsCheckbox);
  });


  test('Verify Reading checkbox click under hobbies section on Practice Forms page', async ({ forms }) => {
    await forms.verifyCheckboxClick(forms.readingCheckbox);
  });


  test('Verify Music checkbox click under hobbies section on Practice Forms page', async ({ forms }) => {
    await forms.verifyCheckboxClick(forms.musicCheckbox);
  });


  test('Verify picture upload on Practice Forms page', async ({ forms }) => {
    await forms.verifyFileUpload();
  });



  test('Verify NCR option select under State dropdown on Practice Forms page', async ({ forms }) => {
    await forms.verifyNCROptionClick();
  });


  test('Verify Delhi option select under City dropdown on Practice Forms page', async ({ forms }) => {
    await forms.verifyNCROptionClick();
    await forms.verifyDelhiOptionClick();
  });



  test('Verify functionality of Submit button on Practice Forms page', async ({ forms }) => {
    await forms.verifyInputFieldFill(forms.firstNameField, testdata.firstName);
    await forms.verifyInputFieldFill(forms.lastNameField, testdata.lastName);
    await forms.verifyRadioButtonClick(forms.maleRadioButton);
    await forms.verifyInputFieldFill(forms.mobileInputField, testdata.phoneNo);
    await forms.verifySubmitButtonClick();
  });


  test('Verify functionality of Close button on Confirmation popup', async ({ forms }) => {
    await forms.verifyInputFieldFill(forms.firstNameField, testdata.firstName);
    await forms.verifyInputFieldFill(forms.lastNameField, testdata.lastName);
    await forms.verifyRadioButtonClick(forms.maleRadioButton);
    await forms.verifyInputFieldFill(forms.mobileInputField, testdata.phoneNo);
    await forms.verifySubmitButtonClick();
    await forms.verifyCloseButtonClick();
  });



})