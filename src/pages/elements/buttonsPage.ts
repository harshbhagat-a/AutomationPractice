import { Locator, Page, expect } from '@playwright/test';

export class ButtonsPage {
    buttonsButton: Locator;
    buttonsHeading: Locator;
    doubleClickButton: Locator;
    rightClickButton: Locator;
    clickMeButton: Locator;
    doubleClickText: Locator;
    rightClickText: Locator;
    dynamicClickText: Locator;
    
    


    constructor(private page: Page) {
        //Locators
        this.buttonsButton = this.page.getByRole('link',{name: 'Buttons', exact: true});
        this.buttonsHeading = this.page.getByRole('heading',{name: 'Buttons', exact: true});
        this.doubleClickButton = this.page.getByRole('button',{name: 'Double Click Me', exact: true});
        this.rightClickButton = this.page.getByRole('button',{name: 'Right Click Me',exact: true});
        this.clickMeButton = this.page.getByRole('button',{name: 'Click Me', exact: true});
        this.doubleClickText = this.page.locator('#doubleClickMessage');
        this.rightClickText = this.page.locator('#rightClickMessage');
        this.dynamicClickText = this.page.locator('#dynamicClickMessage');
        
    }


    async verifyButtonsNavigate(){
        await expect(this.buttonsButton).toBeVisible();
        await this.buttonsButton.click();
        await expect(this.buttonsHeading).toBeVisible();
    }


    async verifyButtonPageElements(){
        const locators: Locator[] = [
            this.buttonsHeading, this.doubleClickButton, this.rightClickButton, this.clickMeButton
        ];
        for (const locator of locators) {
            await expect(locator).toBeVisible();
        }
    }


    async verifyDoubleClickButton(){
        await expect(this.doubleClickButton).toBeVisible();
        await this.doubleClickButton.dblclick();
        await expect(this.doubleClickText).toBeVisible(); 
    }


    async verifyDoubleClickButtonSingleClick(){
        await expect(this.doubleClickButton).toBeVisible();
        await this.doubleClickButton.click();
        await expect(this.doubleClickText).not.toBeVisible();
    }


    async verifyRightClickButton(){
        await expect(this.rightClickButton).toBeVisible();
        await this.rightClickButton.click({button: 'right'});
        await expect(this.rightClickText).toBeVisible();
    }


    async verifyRightClickButtonLeftClick(){
        await expect(this.rightClickButton).toBeVisible();
        await this.rightClickButton.click();
        await expect(this.rightClickText).not.toBeVisible();
    }


    async verifyClickMeButtonClick(){
        await expect(this.clickMeButton).toBeVisible();
        await this.clickMeButton.click();
        await expect(this.dynamicClickText).toBeVisible();
    }



}