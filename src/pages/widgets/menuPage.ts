import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';

export class MenuPage {
    menuOption: Locator;
    menuHeading: Locator;
    mainItem2: Locator;
    subItem: Locator;
    subSubList: Locator;
    subSubItem1: Locator;
   


    constructor(private page: Page) {
        //Locators
        this.menuOption = this.page.getByRole('link', { name: 'Menu', exact: true });
        this.menuHeading = this.page.getByRole('heading',{name: 'Menu'});
        this.mainItem2 = page.getByText('Main Item 2', { exact: true });
        this.subItem = page.getByText('Sub Item', { exact: true }).first();
        this.subSubList = page.getByText('SUB SUB LIST »', { exact: true });
        this.subSubItem1 = page.getByText('Sub Sub Item 1', { exact: true });
        
    }


    async verifyMenuPageNavigation(){
        await expect(this.menuOption).toBeVisible();
        await this.menuOption.click();
        await expect(this.menuHeading).toBeVisible();
    }



    async verifyHoveringMenu(){
        await this.mainItem2.hover();
        await expect(this.subItem).toBeVisible();
    }


    async verifyHoveringSubmenu(){
        await this.subSubList.hover();
        await this.page.waitForTimeout(1000);
        await expect(this.subSubItem1).toBeVisible();
    }

    
}