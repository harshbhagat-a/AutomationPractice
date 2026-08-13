import { test, expect } from '../../src/fixture';
import { testdata } from '../../src/utils/testdata';

test.describe('Web Tables Page', () => {

  test.beforeEach('Verify Web Tables page navigation', async ({ homepage, webTable }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyElementsPageNavigate();
    await webTable.verifyWebTablesNavigate();
  });


  test('Verify Add button functionality on Web Tables page', async ({ webTable }) => {
    await webTable.verifyAddButtonClick();
  });


  test('Verify element visibility on Registration form', async ({ webTable }) => {
    await webTable.verifyAddButtonClick();
    await webTable.verifyFormElementVisibility();
  });


  test('Verify functionality of First Name input field on Registration form', async ({ webTable }) => {
    await webTable.verifyAddButtonClick();
    await webTable.verifyFirstNameFill(webTable.firstNameWrapper, testdata.firstName);
  });


  test('Verify functionality of Last Name input field on Registration form', async ({ webTable }) => {
    await webTable.verifyAddButtonClick();
    await webTable.verifyFirstNameFill(webTable.lastNameWrapper, testdata.lastName);
  });


  test('Verify functionality of Email input field on Registration form', async ({ webTable }) => {
    await webTable.verifyAddButtonClick();
    await webTable.verifyFirstNameFill(webTable.emailWrapper, testdata.email);
  });


  test('Verify functionality of Age input field on Registration form', async ({ webTable }) => {
    await webTable.verifyAddButtonClick();
    await webTable.verifyFirstNameFill(webTable.ageWrapper, testdata.age);
  });



  test('Verify functionality of Salary input field on Registration form', async ({ webTable }) => {
    await webTable.verifyAddButtonClick();
    await webTable.verifyFirstNameFill(webTable.salaryWrapper, testdata.salary);
  });

  

  test('Verify functionality of Department input field on Registration form', async ({ webTable }) => {
    await webTable.verifyAddButtonClick();
    await webTable.verifyFirstNameFill(webTable.departmentWrapper, testdata.department);
  });



  test('Verify functionality of Submit button on Registration form', async ({ webTable }) => {
    await webTable.verifyAddButtonClick();
    await webTable.verifyRegistrationFormFill();
    await webTable.verifySubmitButtonClick();
  });



  test('Verify First Name after successful registration', async ({ webTable }) => {
    await webTable.verifyAddButtonClick();
    await webTable.verifyRegistrationFormFill();
    await webTable.verifySubmitButtonClick();
    await webTable.verifyColumnData(webTable.firstNameColumn, testdata.firstName);
  });


  test('Verify Last Name after successful registration', async ({ webTable }) => {
    await webTable.verifyAddButtonClick();
    await webTable.verifyRegistrationFormFill();
    await webTable.verifySubmitButtonClick();
    await webTable.verifyColumnData(webTable.lastNameColumn, testdata.lastName);
  });



  test('Verify Age after successful registration', async ({ webTable }) => {
    await webTable.verifyAddButtonClick();
    await webTable.verifyRegistrationFormFill();
    await webTable.verifySubmitButtonClick();
    await webTable.verifyColumnData(webTable.ageColumn, testdata.age);
  });



  test('Verify Email after successful registration', async ({ webTable }) => {
    await webTable.verifyAddButtonClick();
    await webTable.verifyRegistrationFormFill();
    await webTable.verifySubmitButtonClick();
    await webTable.verifyColumnData(webTable.emailColumn, testdata.email);
  });



  test('Verify Salary after successful registration', async ({ webTable }) => {
    await webTable.verifyAddButtonClick();
    await webTable.verifyRegistrationFormFill();
    await webTable.verifySubmitButtonClick();
    await webTable.verifyColumnData(webTable.salaryColumn, testdata.salary);
  });




})