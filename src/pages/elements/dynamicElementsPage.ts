import { Locator, Page, expect } from '@playwright/test';

export class DynamicElementsPage {
    dynamicButton1: Locator;
    dynamicButton2: Locator;
    dynamicButton3: Locator;


    constructor(private page: Page) {
        //Locators
        this.dynamicButton1 = this.page.locator('#enableAfter');
        this.dynamicButton2 = this.page.locator('#colorChange');
        this.dynamicButton3 = this.page.locator('#visibleAfter');
    }


    async verifyButtonEnabled(){
        await expect(this.dynamicButton1).toBeVisible();
        await expect(this.dynamicButton1).toBeDisabled();
        await this.page.waitForTimeout(5000);
        await expect(this.dynamicButton1).toBeEnabled();
    }

    async verifyButtonTextColorChange(){
        await expect(this.dynamicButton2).toBeVisible();
        await this.page.waitForTimeout(5000);
        await expect(this.dynamicButton2).toHaveClass(/text-danger/);
    }


    async verifyButtonVisibility(){
        await this.page.waitForTimeout(5000);
        await expect(this.dynamicButton3).toBeVisible();
    }



}
