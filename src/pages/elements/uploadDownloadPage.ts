import { Locator, Page, expect } from '@playwright/test';

export class UploadDownloadPage {
    uploadAndDownloadOption: Locator;
    uploadAndDownloadHeading: Locator;
    downloadButton: Locator;
    chooseFileInput: Locator;
    uploadFilePath: Locator;



    constructor(private page: Page) {
        //Locators
        this.uploadAndDownloadOption = this.page.getByRole('link', { name: 'Upload and Download' });
        this.uploadAndDownloadHeading = this.page.getByRole('heading', { name: 'Upload and Download' });
        this.downloadButton = this.page.getByRole('button', { name: 'Download' });
        this.chooseFileInput = this.page.locator('#uploadFile');
        this.uploadFilePath = this.page.locator('#uploadedFilePath')
    }


    async verifyUploadAndDownloadNavigate() {
        await expect(this.uploadAndDownloadOption).toBeVisible();
        await this.uploadAndDownloadOption.click();
        await expect(this.uploadAndDownloadHeading).toBeVisible();
    }

    async verifyPageElements() {
        const locators: Locator[] = [
            this.uploadAndDownloadHeading, this.downloadButton, this.chooseFileInput
        ];
        for (const locator of locators) {
            await expect(locator).toBeVisible();
        }
    }


    async verifyDownloadButtonClick() {
        await expect(this.downloadButton).toBeVisible();
        const downloadPromise = this.page.waitForEvent('download');
        await this.downloadButton.click();
        const download = await downloadPromise;
        expect(download.suggestedFilename()).toBe('sampleFile.jpeg');
    }


    async verifyFileUpload(){
        await expect(this.chooseFileInput).toBeVisible();
        await this.chooseFileInput.setInputFiles('src/uploadingFiles/sampleFile.jpeg');
        await expect(this.uploadFilePath).toBeVisible();
    }




}
