import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../utils/testdata';

export class HomePage {
    adBanner: Locator;
    alertFrameWindowsCard: Locator;
    elementsGroupButton: Locator;
    alertsOption: Locator;
    alertButton: Locator;
    timerAlertButton: Locator;
    confirmAlertButton: Locator;
    promptAlertButton: Locator;
    frameOption: Locator;
    framesHeading: Locator;
    framesTitle: Locator;
    firstFrame: any;
    secondFrame: any;
    nestedFrameOption: Locator;
    nestedFrameHeading: Locator;
    parentFrame: any;
    paragraphText: Locator;
    sectionBody: Locator;
    interactionsCard: Locator;
    sortableOption: Locator;


    constructor(private page: Page) {
        this.adBanner = this.page.locator('.home-banner');
        this.alertFrameWindowsCard = this.page.getByRole('heading',{name:'Alerts, Frame & Windows'});
        this.elementsGroupButton = this.page.getByText('Elements',{exact: true});
        this.alertsOption = this.page.getByRole('link', { name: 'Alerts' });
        this.alertButton = this.page.locator('#alertButton');
        this.timerAlertButton = this.page.locator('#timerAlertButton');
        this.confirmAlertButton = this.page.locator('#confirmButton');
        this.promptAlertButton = this.page.locator('#promtButton');
        this.frameOption = this.page.getByRole('link',{ name: 'Frames', exact: true });
        this.framesHeading = this.page.getByRole('heading',{name:'Frames'});
        this.firstFrame = this.page.frameLocator('#frame1');
        this.framesTitle = this.page.locator('#sampleHeading');
        this.secondFrame = this.page.frameLocator('#frame2');
        this.nestedFrameOption = this.page.getByRole('link',{ name: 'Nested Frames', exact: true });
        this.nestedFrameHeading = this.page.getByRole('heading',{name:'Nested Frames'});
        this.parentFrame = this.page.frameLocator('#frame1');
        this.paragraphText = this.page.locator('p');
        this.sectionBody = this.page.locator('body');
        this.interactionsCard = this.page.getByText('Interactions',{exact: true});
        this.sortableOption = this.page.getByRole('link',{name: 'sortable', exact: true});
    }


    async verifyHomepageConfirmation(){
        await this.page.goto('/');
        await expect(this.adBanner).toBeVisible();
    }


    async verifyAlertFrameWindowsCardClick(){
        await expect(this.alertFrameWindowsCard).toBeVisible();
        await this.alertFrameWindowsCard.click();
        await expect(this.elementsGroupButton).toBeVisible();
    }

    async verifyAlertOptionClick(){
        await expect(this.alertsOption).toBeVisible();
        await this.alertsOption.click();
        await expect(this.alertButton).toBeVisible();
    }


    async verifyPromptAlertTextFill(){
        await expect(this.promptAlertButton).toBeVisible();
        this.page.on('dialog', async dialog =>{
            await dialog.accept('test');
        });
        await this.promptAlertButton.click();
    }


    async verifyFramesOptionClick(){
        await expect(this.frameOption).toBeVisible();
        await this.frameOption.click();
        await expect(this.framesHeading).toBeVisible();
    }

    async verifyFirstFrameText(){
        await expect(this.framesHeading).toBeVisible();
        await expect(this.firstFrame.locator(this.framesTitle)).toHaveText(testdata.frame1text);
    }


    async verifySecondFrameText(){
        await expect(this.framesHeading).toBeVisible();
        await expect(this.secondFrame.locator(this.framesTitle)).toHaveText(testdata.frame1text);
    }


    async verifyNestedFramesOptionClick(){
        await expect(this.nestedFrameOption).toBeVisible();
        await this.nestedFrameOption.click();
        await expect(this.nestedFrameHeading).toBeVisible();
    }


    async verifyParentFrameText(){
        await expect(this.parentFrame.locator(this.sectionBody)).toHaveText(testdata.parentFrameText);
    }


    async verifyChildFrameText(){
        const childFrame = this.parentFrame.frameLocator(testdata.childIFrame);
        await expect(childFrame.locator(this.paragraphText)).toHaveText(testdata.childFrameText);
    }


    async verifyInteractionsCardClick(){
        await expect(this.interactionsCard).toBeVisible();
        await this.interactionsCard.click();
        await expect(this.sortableOption).toBeVisible();
    }
}