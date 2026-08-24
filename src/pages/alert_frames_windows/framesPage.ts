import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';

export class FramesPage {
    framesHeading: Locator;
    firstFrame: any;
    framesTitle: Locator;
    secondFrame: any;
    


    constructor(private page: Page) {
        //Locators
        this.framesHeading = this.page.getByRole('heading', { name: 'Frames' });
        this.firstFrame = this.page.frameLocator('#frame1');
        this.framesTitle = this.page.locator('#sampleHeading');
        this.secondFrame = this.page.frameLocator('#frame2');
        
    }


    async verifyFirstFrameText() {
        await expect(this.framesHeading).toBeVisible();
        await expect(this.firstFrame.locator(this.framesTitle)).toHaveText(testdata.frame1text);
    }


    async verifySecondFrameText() {
        await expect(this.framesHeading).toBeVisible();
        await expect(this.secondFrame.locator(this.framesTitle)).toHaveText(testdata.frame1text);
    }
}