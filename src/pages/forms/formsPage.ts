import { Locator, Page, expect } from '@playwright/test';

export class FormsPage {
    formsCard: Locator;
    practiceFormLinkedText: Locator;
    practiceFormHeading: Locator;
    firstNameField: Locator;
    lastNameField: Locator;
    emailField: Locator;
    maleRadioButton: Locator;
    femaleRadioButton: Locator;
    otherRadioButton: Locator;
    mobileInputField: Locator;
    dateOfBirthFIeld: Locator;
    subjectField: Locator;
    sportsCheckbox: Locator;
    readingCheckbox: Locator;
    musicCheckbox: Locator;
    pictureField: Locator;
    currentAddressField: Locator;
    selectStateDropdown: Locator;
    selectCityDropdown: Locator;
    submitButton: Locator;

    
    constructor(private page: Page) {
        //Locators
        this.formsCard = this.page.getByRole('heading', { name: 'Forms' });
        this.practiceFormLinkedText = this.page.getByRole('link',{name: 'Practice Form'});
        this.practiceFormHeading = this.page.getByRole('heading',{name: 'Practice Form'});
        this.firstNameField = this.page.locator('#firstName');
        this.lastNameField = this.page.locator('#lastName');
        this.emailField = this.page.locator('#userEmail');
        this.maleRadioButton = this.page.getByText('Male', {exact: true});
        this.femaleRadioButton = this.page.getByText('Female',{exact: true});
        this.otherRadioButton = this.page.getByText('Other',{exact: true});
        this.mobileInputField = this.page.locator('#userNumber');
        this.dateOfBirthFIeld = this.page.locator('#dateOfBirthInput');
        this.subjectField = this.page.locator('#subjectsInput');
        this.sportsCheckbox = this.page.getByText('Sports',{exact: true});
        this.readingCheckbox = this.page.getByText('Reading',{exact: true});
        this.musicCheckbox = this.page.getByText('Music',{exact: true});
        this.pictureField = this.page.locator('#uploadPicture');
        this.currentAddressField = this.page.locator('#currentAddress');
        this.selectStateDropdown = this.page.getByText('Select State',{exact: true});
        this.selectCityDropdown = this.page.locator('#city');
        this.submitButton = this.page.getByRole('button',{name: 'Submit'});
        
    }

    async verifyFormsCardClick(){
        await expect(this.formsCard).toBeVisible();
        await this.formsCard.click();
        await expect(this.practiceFormLinkedText).toBeVisible();
    }


    async verifyPracticeFormNavigate(){
        await expect(this.practiceFormLinkedText).toBeVisible();
        await this.practiceFormLinkedText.click();
        await expect(this.practiceFormHeading).toBeVisible();
    }

    async verifyPracticeFormPageElements(){
        const locators: Locator[] = [
            this.firstNameField, this.lastNameField, this.emailField, this.maleRadioButton, this.femaleRadioButton,
            this.otherRadioButton, this.mobileInputField, this.dateOfBirthFIeld, this.subjectField, this.sportsCheckbox,
            this.readingCheckbox, this.musicCheckbox, this.pictureField, this.currentAddressField, this.selectStateDropdown,
            this.selectCityDropdown, this.submitButton
        ];
        for (const locator of locators) {
            await expect(locator).toBeVisible();
        }
    }

    async verifyInputFieldFill(element: Locator, data: string){
        await expect(element).toBeVisible();
        await element.fill(data);
        await expect(element).toHaveValue(data);
    }



    async verifyRadioButtonClick(element: Locator){
        await expect(element).toBeVisible();
        await element.click();
        await expect(element).toBeChecked();
    }


}