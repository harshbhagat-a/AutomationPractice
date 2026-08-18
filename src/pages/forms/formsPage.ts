import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';

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
    dateOfBirthField: Locator;
    subjectField: Locator;
    sportsCheckbox: Locator;
    readingCheckbox: Locator;
    musicCheckbox: Locator;
    pictureField: Locator;
    currentAddressField: Locator;
    selectStateDropdown: Locator;
    selectCityDropdown: Locator;
    submitButton: Locator;
    calenderWidget: Locator;
    yearDropdown: Locator;
    monthDropdown: Locator;
    monthYearHeading: Locator;
    dateTable: Locator;

    
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
        this.dateOfBirthField = this.page.locator('#dateOfBirthInput');
        this.subjectField = this.page.locator('#subjectsInput');
        this.sportsCheckbox = this.page.getByText('Sports',{exact: true});
        this.readingCheckbox = this.page.getByText('Reading',{exact: true});
        this.musicCheckbox = this.page.getByText('Music',{exact: true});
        this.pictureField = this.page.locator('#uploadPicture');
        this.currentAddressField = this.page.locator('#currentAddress');
        this.selectStateDropdown = this.page.getByText('Select State',{exact: true});
        this.selectCityDropdown = this.page.locator('#city');
        this.submitButton = this.page.getByRole('button',{name: 'Submit'});
        this.calenderWidget = this.page.locator('.react-datepicker');
        this.yearDropdown = this.page.locator('.react-datepicker__year-select');
        this.monthDropdown = this.page.locator('.react-datepicker__month-select');
        this.monthYearHeading = this.page.locator('.react-datepicker__current-month');
        this.dateTable  = this.page.getByRole('table');

        
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
            this.otherRadioButton, this.mobileInputField, this.dateOfBirthField, this.subjectField, this.sportsCheckbox,
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


    async verifyDOBClick(){
        await expect(this.dateOfBirthField).toBeVisible();
        await this.dateOfBirthField.click();
        await expect(this.calenderWidget).toBeVisible();
    }


    async verifyYearSelection(){
        await expect(this.yearDropdown).toBeVisible();
        await this.yearDropdown.selectOption(testdata.year);
        await expect(this.yearDropdown).toHaveValue(testdata.year);
    }



    async verifyMonthSelection(){
        await expect(this.monthDropdown).toBeVisible();
        await this.monthDropdown.selectOption(testdata.month);
        await expect(this.monthYearHeading).toContainText(testdata.month);
    }


    async verifyDateSelection(){
        const SelectedDate = this.dateTable.getByText(testdata.date);
        await expect(SelectedDate).toBeVisible();
        await SelectedDate.click();
    }

    async verifyFullSelectedDate(){
        const expectedDate = `${testdata.date} ${testdata.month} ${testdata.year}`;
        await expect(this.dateOfBirthField).toHaveValue(expectedDate);
    }


}