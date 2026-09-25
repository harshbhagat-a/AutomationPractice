import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';

export class CheckBoxPage {
    checkboxButton: Locator;
    checkboxHeading: Locator;
    homeFolderIcon: Locator;
    homeCheckbox: Locator;
    plusIcon: Locator;
    


    constructor(private page: Page) {
        //Locators
        this.checkboxButton = this.page.getByRole('link',{name: 'Check Box'});
        this.checkboxHeading = this.page.getByRole('heading',{name: 'Check Box'});
        this.homeFolderIcon = this.page.locator('.rc-tree-node-content-wrapper');
        this.homeCheckbox = this.page.locator('.rc-tree-checkbox');
        this.plusIcon = this.page.locator('.rc-tree-switcher');
        
    }

    async verifyCheckBoxPageNavigate(){
        await expect(this.checkboxButton).toBeVisible();
        await this.checkboxButton.click();
        await expect(this.checkboxHeading).toBeVisible();
    }


    async verifyCheckBoxPageElements(){
        const locators: Locator[] = [
            this.checkboxHeading, this.homeFolderIcon, this.homeCheckbox, this.plusIcon
        ];
        for (const locator of locators) {
            await expect(locator).toBeVisible();
        }
    }
}