import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';

export class SelectMenuPage {
    selectMenuOption: Locator;
    selectMenuHeading: Locator;
    selectValueDropdown: Locator;
    selectOneDropdown: Locator;
    oldStyleSelectMenuDropdown: Locator;
    multiSelectDropdown: Locator;
    standardMultiSelect: Locator;
    options: Locator;
    dropdownMenu: Locator;
    selectValueSelectedOption: Locator;
    

    constructor(private page: Page) {
        //Locators
        this.selectMenuOption = this.page.getByRole('link',{name: 'Select Menu'});
        this.selectMenuHeading = this.page.getByRole('heading',{name: 'Select Menu'});
        this.selectValueDropdown = this.page.locator('#react-select-2-input');
        this.selectValueSelectedOption = this.page.locator('.css-1dimb5e-singleValue')
        this.selectOneDropdown = this.page.locator('#react-select-3-input');
        this.oldStyleSelectMenuDropdown = this.page.locator('#oldSelectMenu');
        this.multiSelectDropdown = this.page.locator('#react-select-4-placeholder');
        this.standardMultiSelect = this.page.locator('#cars');
        this.dropdownMenu = this.page.locator('.css-1nmdiq5-menu');
        this.options = this.page.getByRole('option');
        
    }


    async verifySelectMenuNavigate(){
        await expect(this.selectMenuOption).toBeVisible();
        await this.selectMenuOption.click();
        await expect(this.selectMenuHeading).toBeVisible();
    }



    async verifySelectMenuElements(){
        const locators: Locator[] = [
            this.selectMenuHeading, this.selectValueDropdown, this.selectOneDropdown,
            this.oldStyleSelectMenuDropdown, this.multiSelectDropdown, this.standardMultiSelect
        ];
        for (const locator of locators) {
            await expect(locator).toBeVisible();
        }
    }


    async verifySelectValueDropdownClick(){
        await expect(this.selectValueDropdown).toBeVisible();
        await this.selectValueDropdown.click();
        await expect(this.dropdownMenu).toBeVisible();
    }
    

    async verifySelectValueOptionSelect(position: number){
        await expect(this.dropdownMenu).toBeVisible();
        const option = this.options.nth(position-1);
        await expect(option).toBeVisible();
        await option.click();
        await expect(this.selectValueSelectedOption).toBeVisible();
    }



    async verifySelectOneDropdownClick(){
        await expect(this.selectOneDropdown).toBeVisible();
        await this.selectOneDropdown.click();
        await expect(this.dropdownMenu).toBeVisible();
    }


    
}