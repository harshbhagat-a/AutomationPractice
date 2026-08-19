import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';

export class NestedFramesPage {
    parentFrame: any;
    sectionBody: Locator;
    paragraphText: Locator;
    

    constructor(private page: Page) {
        //Locators
        this.parentFrame = this.page.frameLocator('#frame1');
        this.sectionBody = this.page.locator('body');
        this.paragraphText = this.page.locator('p');
        
    }


    async verifyParentFrameText() {
        await expect(this.parentFrame.locator(this.sectionBody)).toHaveText(testdata.parentFrameText);
    }
    
    
    async verifyChildFrameText() {
        const childFrame = this.parentFrame.frameLocator(testdata.childIFrame);
        await expect(childFrame.locator(this.paragraphText)).toHaveText(testdata.childFrameText);
    }

    
}