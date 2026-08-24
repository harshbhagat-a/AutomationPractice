import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';

export class DraggablePage {
    draggableText: Locator;
    draggableLink: Locator;
    draggableHeading: Locator;
    containerRestrictedTab: Locator;
    draggableBox: Locator;



    constructor(private page: Page) {
        //Locators
        this.draggableLink = this.page.getByRole('link',{name: 'Dragabble'});
        this.draggableHeading = this.page.getByRole('heading',{name:'Dragabble'});
        this.containerRestrictedTab = this.page.getByRole('tab',{name:'Container Restricted'});
        this.draggableText = this.page.locator('.ui-widget-header');
        this.draggableBox = this.page.locator('.ui-widget-content.ui-draggable')
    }


    async draggablePageNavigation(){
        await expect(this.draggableLink).toBeVisible();
        await this.draggableLink.click();
        await expect(this.draggableHeading).toBeVisible();
    }


    async containerRestrictedSectionClick(){
        await expect(this.containerRestrictedTab).toBeVisible();
        await this.containerRestrictedTab.click();
        await expect(this.draggableText).toBeVisible();
    }



    async dragElementAndVerifyPosition() {
        await expect(this.draggableText).toBeVisible();
        const initialBox = await this.draggableText.boundingBox();
        if (!initialBox) {
            throw new Error('Draggable element was not found');
        }
        const startX = initialBox.x + initialBox.width / 2;
        const startY = initialBox.y + initialBox.height / 2;
        await this.page.mouse.move(startX, startY);
        await this.draggableText.hover();
        await this.page.waitForTimeout(1000);
        await this.page.mouse.down();
        await this.page.mouse.move(startX + 4, startY + 70, { steps: 3 });
        await this.page.waitForTimeout(1000);
        await this.page.mouse.up();
        const finalBox = await this.draggableText.boundingBox();
        if (!finalBox) {
            throw new Error('Draggable element is no longer visible');
        }
        expect(finalBox.x).not.toBe(initialBox.x);
        expect(finalBox.y).not.toBe(initialBox.y);
    }



    async verifyDraggableBoxPosition() {
        await expect(this.draggableBox).toBeVisible();
        const initialBox = await this.draggableBox.boundingBox();
        if (!initialBox) {
            throw new Error('Draggable element was not found');
        }
        const startX = initialBox.x + initialBox.width / 2;
        const startY = initialBox.y + initialBox.height / 2;
        await this.page.mouse.move(startX, startY);
        await this.draggableBox.hover();
        await this.page.waitForTimeout(1000);
        await this.page.mouse.down();
        await this.page.mouse.move(startX + 100, startY + 30, { steps: 10 });
        await this.page.waitForTimeout(1000);
        await this.page.mouse.up();
        const finalBox = await this.draggableBox.boundingBox();
        if (!finalBox) {
            throw new Error('Draggable element is no longer visible');
        }
        expect(finalBox.x).not.toBe(initialBox.x);
        expect(finalBox.y).not.toBe(initialBox.y);
    }




}