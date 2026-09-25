import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';

export class TextBoxPage {
    textBoxButton: Locator;
    textboxHeading: Locator;
    nameWrapper: Locator;
    emailWrapper: Locator;
    currentAddressWrapper: Locator;
    permanentAddressWrapper: Locator;
    submitButton: Locator;
    fullNameField: Locator;
    emailField: Locator;
    permanentAddressField: Locator;
    currentAddressField: Locator;
    outputConfirmationBox: Locator;


    constructor(private page: Page) {
        //Locators
        this.textBoxButton = this.page.getByRole('link',{name: 'Text Box', exact: true});
        this.textboxHeading = this.page.getByRole('heading',{name: 'Text Box'});
        this.nameWrapper = this.page.locator('#userName-wrapper');
        this.emailWrapper = this.page.locator('#userEmail-wrapper');
        this.currentAddressWrapper = this.page.locator('#currentAddress-wrapper');
        this.permanentAddressWrapper = this.page.locator('#permanentAddress-wrapper');
        this.submitButton = this.page.getByRole('button',{name: 'Submit'});
        this.fullNameField = this.page.locator('#userName');
        this.emailField = this.page.locator('#userEmail');
        this.currentAddressField = this.page.locator('#currentAddress');
        this.permanentAddressField = this.page.locator('#permanentAddress');
        this.outputConfirmationBox = this.page.locator('#output');
        
    }


    async verifyTextboxPageNavigation(){
        await expect(this.textBoxButton).toBeVisible();
        await this.textBoxButton.click();
        await expect(this.textboxHeading).toBeVisible();
    }


    async textBoxPageElements(){
        const locators: Locator[] = [
            this.textboxHeading, this.nameWrapper, this.emailWrapper, this.currentAddressWrapper, this.permanentAddressWrapper,
            this.submitButton
        ];
        for (const locator of locators) {
            await expect(locator).toBeVisible();
        }
    }


    async verifyFullNameFill(){
        await expect(this.fullNameField).toBeVisible();
        const fullname = testdata.firstName + " " + testdata.lastName;
        await this.fullNameField.fill(fullname);
        await expect(this.fullNameField).toHaveValue(fullname);
    }


    async verifyEmailFill(){
        await expect(this.emailField).toBeVisible();
        await this.emailField.fill(testdata.email);
        await expect(this.emailField).toHaveValue(testdata.email);
    }  


    async verifyCurrentAddressFill(){
        await expect(this.currentAddressField).toBeVisible();
        await this.currentAddressField.fill(testdata.currentAddress);
        await expect(this.currentAddressField).toHaveValue(testdata.currentAddress);
    }



    async verifyPermanentAddressFill(){
        await expect(this.permanentAddressField).toBeVisible();
        await this.permanentAddressField.fill(testdata.currentAddress);
        await expect(this.permanentAddressField).toHaveValue(testdata.currentAddress);
    }


    async verifySubmitButtonClick(){
        await expect(this.submitButton).toBeVisible();
        await this.submitButton.click();
        await expect(this.outputConfirmationBox).toBeVisible();
    }



    
}