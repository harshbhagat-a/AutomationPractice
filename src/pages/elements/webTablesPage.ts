import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';

export class WebTablesPage {
    webTablesOption: Locator;
    webTablesHeading: Locator;
    elementsCard: Locator;
    addButton: Locator;
    crossButton: Locator;
    registrationFormHeading: Locator;
    firstNameWrapper: Locator;
    lastNameWrapper: Locator;
    emailWrapper: Locator;
    ageWrapper: Locator;
    salaryWrapper: Locator;
    departmentWrapper: Locator;
    submitButton: Locator;
    inputField: Locator;
    lastColumn: Locator;
    firstNameColumn: Locator;
    lastNameColumn: Locator;
    ageColumn: Locator;
    emailColumn: Locator;
    salaryColumn: Locator;


    constructor(private page: Page) {
        this.elementsCard = this.page.getByRole('heading',{name: 'Elements'});
        this.webTablesOption = this.page.getByRole('link',{name: 'Web Tables'});
        this.webTablesHeading = this.page.getByRole('heading',{name: 'Web Tables'});
        this.addButton = this.page.getByRole('button',{name: 'Add'});
        this.crossButton = this.page.locator('.btn-close');
        this.registrationFormHeading = this.page.locator('#registration-form-modal');
        this.firstNameWrapper = this.page.locator('#firstName-wrapper');
        this.lastNameWrapper = this.page.locator('#lastName-wrapper');
        this.emailWrapper = this.page.locator('#userEmail-wrapper');
        this.ageWrapper = this.page.locator('#age-wrapper');
        this.salaryWrapper = this.page.locator('#salary-wrapper');
        this.departmentWrapper = this.page.locator('#department-wrapper');
        this.submitButton = this.page.getByRole('button',{name: 'Submit'});
        this.inputField = this.page.locator('[type="text"]');
        this.lastColumn = this.page.locator('.table-striped tr').last();
        this.firstNameColumn = this.page.locator('td').first();
        this.lastNameColumn = this.page.locator('td').nth(1);
        this.ageColumn = this.page.locator('td').nth(2);
        this.emailColumn = this.page.locator('td').nth(3);
        this.salaryColumn = this.page.locator('td').nth(4);
    }


    async verifyWebTablesNavigate(){
        await expect(this.webTablesOption).toBeVisible();
        await this.webTablesOption.click();
        await expect(this.webTablesHeading).toBeVisible();
    }


    async verifyAddButtonClick(){
        await expect(this.addButton).toBeVisible();
        await this.addButton.click();
        await expect(this.crossButton).toBeVisible();
    }

    async verifyFormElementVisibility(){
        const locators: Locator[] = [
            this.registrationFormHeading, this.crossButton, this.firstNameWrapper, this.lastNameWrapper,
            this.emailWrapper, this.ageWrapper, this.salaryWrapper, this.departmentWrapper, this.submitButton
        ];
        for (const locator of locators) {
            await expect(locator).toBeVisible();
        }
    }

    async verifyFirstNameFill(section: Locator, data: string ){
        const fieldLocator = section.locator(this.inputField)
        await expect(fieldLocator).toBeVisible();
        await fieldLocator.fill(data);
        await expect(fieldLocator).toHaveValue(data);
    }


    async verifySubmitButtonClick(){
        await expect(this.submitButton).toBeVisible();
        await this.submitButton.click();
        await expect(this.lastColumn).toBeVisible();
    }


    async verifyRegistrationFormFill(){
        await this.verifyFirstNameFill(this.firstNameWrapper, testdata.firstName);
        await this.verifyFirstNameFill(this.lastNameWrapper, testdata.lastName);
        await this.verifyFirstNameFill(this.emailWrapper, testdata.email);
        await this.verifyFirstNameFill(this.ageWrapper, testdata.age);
        await this.verifyFirstNameFill(this.salaryWrapper, testdata.salary);
        await this.verifyFirstNameFill(this.departmentWrapper, testdata.department);
    }

    async verifyColumnData(column: Locator, data: string ){
        await expect(this.lastColumn).toBeVisible();
        await expect(this.lastColumn.locator(column)).toHaveText(data);
    }

}