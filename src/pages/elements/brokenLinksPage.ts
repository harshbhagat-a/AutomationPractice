import { Locator, Page, expect } from '@playwright/test';

export class BrokenLinksPage {
    BrokenLinkImagesLinkText: Locator;
    brokenLinksHeading: Locator;
    elementsSection: Locator;
    validImageText: Locator;
    brokenImageText: Locator;
    validLinkText: Locator;
    brokenLinkText: Locator;
    validLink: Locator;
    brokenLink: Locator;
    brokenPageTitle: Locator;


    constructor(private page: Page) {
        //Locators
        this.BrokenLinkImagesLinkText = this.page.getByRole('link',{name: 'Broken Links - Images'});
        this.brokenLinksHeading = this.page.getByRole('heading',{name:'Broken Links - Images'});
        this.elementsSection = this.page.locator('.col-md-6');
        this.validImageText = this.page.getByText('Valid image',{exact: true});
        this.brokenImageText = this.page.getByText('Broken image',{exact: true});
        this.validLinkText = this.page.getByText('Valid Link',{exact: true});
        this.brokenLinkText = this.page.getByText('Broken Link',{exact: true});
        this.validLink = this.page.getByText('Click Here for Valid Link',{exact: true});
        this.brokenLink = this.page.getByText('Click Here for Broken Link',{exact: true});
        this.brokenPageTitle = this.page.getByRole('heading',{name: 'Status Codes'});
    }


    async verifyBrokenLinksNavigate(){
        await expect(this.BrokenLinkImagesLinkText).toBeVisible();
        await this.BrokenLinkImagesLinkText.click();
        await expect(this.brokenLinksHeading).toBeVisible();

    }


    async verifyBrokenLinksElements(){
        const locators: Locator[] = [
            this.validImageText, this.brokenImageText, this.validLinkText, this.brokenLinkText
        ];
        for (const locator of locators) {
            await expect(locator).toBeVisible();
        }
    }


    async verifyValidLinkClick(){
        await expect(this.validLink).toBeVisible();
        await this.validLink.click();
        await this.page.waitForLoadState('domcontentloaded');
    }



    async verifyBrokenLinkClick(){
        await expect(this.brokenLink).toBeVisible();
        await this.brokenLink.click();
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.brokenPageTitle).toBeVisible();
    }



}