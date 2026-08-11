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
    gridButton: Locator;
    gridOne: Locator;
    gridSix: Locator;
    gridElements: Locator;
    gridItems: Locator;
    listOne: Locator;
    listFour: Locator;
    listItems: Locator;
    firstSelectable: Locator;
    selectableOption: Locator;
    firstGridSelectable: Locator;
    resizable: Locator;
    resizableHandle: Locator;
    resizableOption: Locator;
    resizableHeading: Locator;


    constructor(private page: Page) {
        this.adBanner = this.page.locator('.home-banner');
        this.alertFrameWindowsCard = this.page.getByRole('heading', { name: 'Alerts, Frame & Windows' });
        this.elementsGroupButton = this.page.getByText('Elements', { exact: true });
        this.alertsOption = this.page.getByRole('link', { name: 'Alerts' });
        this.alertButton = this.page.locator('#alertButton');
        this.timerAlertButton = this.page.locator('#timerAlertButton');
        this.confirmAlertButton = this.page.locator('#confirmButton');
        this.promptAlertButton = this.page.locator('#promtButton');
        this.frameOption = this.page.getByRole('link', { name: 'Frames', exact: true });
        this.framesHeading = this.page.getByRole('heading', { name: 'Frames' });
        this.firstFrame = this.page.frameLocator('#frame1');
        this.framesTitle = this.page.locator('#sampleHeading');
        this.secondFrame = this.page.frameLocator('#frame2');
        this.nestedFrameOption = this.page.getByRole('link', { name: 'Nested Frames', exact: true });
        this.nestedFrameHeading = this.page.getByRole('heading', { name: 'Nested Frames' });
        this.parentFrame = this.page.frameLocator('#frame1');
        this.paragraphText = this.page.locator('p');
        this.sectionBody = this.page.locator('body');
        this.interactionsCard = this.page.getByText('Interactions', { exact: true });
        this.sortableOption = this.page.getByRole('link', { name: 'Sortable' });
        this.gridButton = this.page.getByRole('tab', { name: 'Grid' });
        this.gridElements = this.page.locator('#demo-tabpanel-grid');
        this.gridOne = this.page.locator('[data-handler-id="T12"]');
        this.gridSix = this.page.locator('[data-handler-id="T22"]');
        this.gridItems = this.page.locator('.create-grid .list-group-item');
        this.listItems = this.page.locator('.list-group .list-group-item');
        this.listOne = this.listItems.first();
        this.listFour = this.listItems.nth(3);
        this.selectableOption = this.page.getByRole('link', { name: 'Selectable' });
        this.firstSelectable = this.page.getByRole('tabpanel', { name: 'List' }).getByText('Cras justo odio', { exact: true });
        this.firstGridSelectable = this.page.locator('.grid-container .list-group-item').first();
        this.resizable = this.page.locator('#resizable');
        this.resizableHandle = this.resizable.locator('.react-resizable-handle-se');
        this.resizableOption = this.page.getByRole('link', { name: 'Resizable' });
        this.resizableHeading = this.page.getByRole('heading',{name: 'Resizable'});
    }


    async verifyHomepageConfirmation() {
        await this.page.goto('/');
        await expect(this.adBanner).toBeVisible();
    }


    async verifyAlertFrameWindowsCardClick() {
        await expect(this.alertFrameWindowsCard).toBeVisible();
        await this.alertFrameWindowsCard.click();
        await expect(this.elementsGroupButton).toBeVisible();
    }

    async verifyAlertOptionClick() {
        await expect(this.alertsOption).toBeVisible();
        await this.alertsOption.click();
        await expect(this.alertButton).toBeVisible();
    }


    async verifyPromptAlertTextFill() {
        await expect(this.promptAlertButton).toBeVisible();
        this.page.on('dialog', async dialog => {
            await dialog.accept('test');
        });
        await this.promptAlertButton.click();
    }


    async verifyFramesOptionClick() {
        await expect(this.frameOption).toBeVisible();
        await this.frameOption.click();
        await expect(this.framesHeading).toBeVisible();
    }

    async verifyFirstFrameText() {
        await expect(this.framesHeading).toBeVisible();
        await expect(this.firstFrame.locator(this.framesTitle)).toHaveText(testdata.frame1text);
    }


    async verifySecondFrameText() {
        await expect(this.framesHeading).toBeVisible();
        await expect(this.secondFrame.locator(this.framesTitle)).toHaveText(testdata.frame1text);
    }


    async verifyNestedFramesOptionClick() {
        await expect(this.nestedFrameOption).toBeVisible();
        await this.nestedFrameOption.click();
        await expect(this.nestedFrameHeading).toBeVisible();
    }


    async verifyParentFrameText() {
        await expect(this.parentFrame.locator(this.sectionBody)).toHaveText(testdata.parentFrameText);
    }


    async verifyChildFrameText() {
        const childFrame = this.parentFrame.frameLocator(testdata.childIFrame);
        await expect(childFrame.locator(this.paragraphText)).toHaveText(testdata.childFrameText);
    }


    async verifyInteractionsCardClick() {
        await expect(this.interactionsCard).toBeVisible();
        await this.interactionsCard.click();
        await expect(this.sortableOption).toBeVisible();
    }

    async verifySortablePageNavigation() {
        await expect(this.sortableOption).toBeVisible();
        await this.sortableOption.click();
        await expect(this.gridButton).toBeVisible();
    }

    async verifyGridSectionNavigate() {
        await expect(this.gridButton).toBeVisible();
        await this.gridButton.click();
        await expect(this.gridOne).toBeVisible();
    }


    async verifyDraggingElement() {
        await expect(this.gridOne).toBeVisible();
        await this.gridOne.dragTo(this.gridSix);
    }


    async verifyGridDragAndSort(source: Locator, target: Locator) {
        const itemsBefore = await this.gridItems.allTextContents();
        const sourceText = (await source.textContent())?.trim();
        const targetText = (await target.textContent())?.trim();
        expect(sourceText).toBeTruthy();
        expect(targetText).toBeTruthy();
        const targetIndex = itemsBefore.indexOf(targetText!);
        await source.dragTo(target);
        const itemsAfter = await this.gridItems.allTextContents();
        expect(itemsAfter[targetIndex]).toBe(sourceText);
    }



    async verifyListDragAndSort(source: Locator, target: Locator) {
        const itemsBefore = await this.listItems.allTextContents();
        const sourceText = (await source.textContent())?.trim();
        const targetText = (await target.textContent())?.trim();
        expect(sourceText).toBeTruthy();
        expect(targetText).toBeTruthy();
        const targetIndex = itemsBefore.indexOf(targetText!);
        await source.dragTo(target, { steps: 10 });
        const itemsAfter = await this.listItems.allTextContents();
        console.log('itemsBefore:', itemsBefore);
        console.log('targetIndex:', targetIndex);
        console.log('itemsAfter:', itemsAfter);
        expect(itemsAfter[targetIndex]).toBe(sourceText);
    }


    async verifySelectableNavigation(){
        await expect(this.selectableOption).toBeVisible();
        await this.selectableOption.click();
        await expect(this.gridButton).toBeVisible();
    }


    async verifyListSelect(){
        await expect(this.firstSelectable).toBeVisible();
        await this.firstSelectable.click();
        await expect(this.firstSelectable).toHaveClass(/active/);
    }


    async verifyGridSelect(){
        await expect(this.firstGridSelectable).toBeVisible();
        await this.firstGridSelectable.click();
        await expect(this.firstGridSelectable).toHaveClass(/active/);
    }


    async verifySelectableGridNavigate() {
        await expect(this.gridButton).toBeVisible();
        await this.gridButton.click();
        await expect(this.firstGridSelectable).toBeVisible();
    }


    async verifyResizableNavigation(){
        await expect(this.resizableOption).toBeVisible();
        await this.resizableOption.click();
        await expect(this.resizableHeading).toBeVisible();
    }


    async verifyResizingElement() {
        await expect(this.resizable).toBeVisible();
        const sizeBefore = await this.resizable.boundingBox();
        const handle = await this.resizableHandle.boundingBox();
        await this.page.mouse.move(
            handle!.x + handle!.width / 2,
            handle!.y + handle!.height / 2
        );
        await this.page.mouse.down();
        await this.page.mouse.move(
            handle!.x + handle!.width / 2 + 100,
            handle!.y + handle!.height / 2 + 50,
            { steps: 10 }
        );
        await this.page.mouse.up();
        const sizeAfter = await this.resizable.boundingBox();
        expect(sizeAfter!.width).toBeGreaterThan(sizeBefore!.width);
        expect(sizeAfter!.height).toBeGreaterThan(sizeBefore!.height);
    }

}