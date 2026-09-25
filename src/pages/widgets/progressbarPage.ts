import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';

export class ProgressBarPage {

    progressBar: Locator;
    startButton: Locator;
    stopButton: Locator;
    progressBarOption: Locator;
    progressBarHeading: Locator;


    constructor(private page: Page) {
        //Locators
        this.progressBar = this.page.locator('.progress-bar');
        this.startButton = this.page.getByRole('button',{name: 'Start'});
        this.stopButton = this.page.getByRole('button',{name: 'Stop'});
        this.progressBarOption = this.page.getByRole('link',{name: 'Progress Bar'});
        this.progressBarHeading = this.page.getByRole('heading',{name: 'Progress Bar'});
        
    }


    async verifyProgressBarStop(expected: any){
        let progress = 0;
        await expect(this.startButton).toBeVisible();
        await this.startButton.click();
        while (progress < expected) {
        progress = Number(
            await this.progressBar.getAttribute('aria-valuenow'));
        }
        await this.stopButton.click();
        console.log(`Progress stopped at ${progress}%`);
        expect(progress).toBeGreaterThanOrEqual(expected);
    }



    async verifyProgressBarNavigate(){
        await expect(this.progressBarOption).toBeVisible();
        await this.progressBarOption.click();
        await expect(this.progressBarHeading).toBeVisible();
    }




    
}