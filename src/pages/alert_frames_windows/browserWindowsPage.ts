import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';

export class BrowserWindowsPage {
    browserWindowsOption: Locator;
    browserWindowsHeading: Locator;
    newWindowButton: Locator;
    newTabButton: Locator;
    newWindowMessageButton: Locator;




    constructor(private page: Page) {
        //Locators
        this.browserWindowsOption = this.page.getByRole('link', { name: 'Browser Windows' });
        this.browserWindowsHeading = this.page.getByRole('heading', { name: 'Browser Windows' });
        this.newWindowButton = this.page.getByRole('button', { name: 'New Window', exact: true });
        this.newTabButton = this.page.getByRole('button', { name: 'New Tab' })
        this.newWindowMessageButton = this.page.getByRole('button', { name: 'New Window Message' })


    }


    async verifyBrowserWindowNavigate() {
        await expect(this.browserWindowsOption).toBeVisible();
        await this.browserWindowsOption.click();
        await expect(this.browserWindowsHeading).toBeVisible();
    }


    async verifyNewWindowButtonClick() {
        await expect(this.newWindowButton).toBeVisible();
        const popupPromise = this.page.waitForEvent('popup');
        await this.newWindowButton.click();
        const popup = await popupPromise;
        await popup.waitForLoadState();
    }


    async verifyNewTabButtonClick() {
        await expect(this.newTabButton).toBeVisible();
        const newTabPromise = this.page.waitForEvent('popup');
        await this.newTabButton.click();
        const newTab = await newTabPromise;
        await expect(newTab).toBeTruthy();
    }



    async verifyNewWindowMessageButtonClick() {
        await expect(this.newWindowMessageButton).toBeVisible();
        const popupPromise = this.page.waitForEvent('popup');
        await this.newWindowMessageButton.click();
        const popup = await popupPromise;
        await expect(popup.locator('body')).toContainText(
            'Knowledge increases by sharing but not by saving.'
        );

    }




}