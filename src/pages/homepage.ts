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
    droppableOption: Locator;
    droppableTitle: Locator;
    acceptTabButton: Locator;
    dropAcceptableElement: Locator;
    droppableArea: Locator;
    unacceptableElement: Locator;
    widgetCard: Locator;
    menuOption: Locator;
    mainItem2: Locator;
    subItem: Locator;
    subSubList: Locator;
    subSubItem1: Locator;
    menuHeading: Locator;
    sliderOption: Locator;
    sliderHeading: Locator;
    sliderElement: Locator;
    sliderValueElement: Locator;
    tooltipOption: Locator;
    tooltipHeading: Locator;
    hoverMeButton: Locator;
    buttonHoverText: Locator;
    hoverTextfield: Locator;
    textfieldHoverText: Locator;
    contraryLinkedText: Locator;
    contraryHoverText: Locator;
    numberHoverText: Locator;
    numberHoverLinkedText: Locator;
    elementsCard: Locator;
    dynamicPropertiesOption: Locator;
    dynamicPropertiesHeading: Locator;
    dynamicButton1: Locator;
    dynamicButton2: Locator;
    dynamicButton3: Locator;
    webTablesOption: Locator;
    webTablesHeading: Locator;
    browserWindowsOption: Locator;
    browserWindowsHeading: Locator;
    newWindowButton: Locator;


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
        this.resizableHeading = this.page.getByRole('heading', { name: 'Resizable' });
        this.droppableOption = this.page.getByRole('link', { name: 'Droppable' });
        this.droppableTitle = this.page.getByRole('heading', { name: 'Droppable' });
        this.acceptTabButton = this.page.getByRole('tab', { name: 'Accept' });
        this.dropAcceptableElement = this.page.locator('#acceptable');
        this.droppableArea = this.page.locator('.accept-drop-container .drop-box');
        this.unacceptableElement = this.page.locator('.accept-drop-container .drag-box').last();
        this.widgetCard = this.page.getByRole('heading', { name: 'Widgets' });
        this.menuOption = this.page.getByRole('link', { name: 'Menu', exact: true });
        this.menuHeading = this.page.getByRole('heading', { name: 'Menu' });
        this.mainItem2 = page.getByText('Main Item 2', { exact: true });
        this.subItem = page.getByText('Sub Item', { exact: true }).first();
        this.subSubList = page.getByText('SUB SUB LIST »', { exact: true });
        this.subSubItem1 = page.getByText('Sub Sub Item 1', { exact: true });
        this.sliderOption = this.page.getByRole('link', { name: 'Slider' });
        this.sliderHeading = this.page.getByRole('heading', { name: 'Slider' });
        this.sliderElement = this.page.locator('.range-slider');
        this.sliderValueElement = this.page.locator('#sliderValue');
        this.tooltipOption = this.page.getByRole('link', { name: 'Tool Tips' });
        this.tooltipHeading = this.page.getByRole('heading', { name: 'Tool Tips' });
        this.hoverMeButton = this.page.getByRole('button', { name: 'Hover me to see' });
        this.buttonHoverText = this.page.getByText('You hovered over the Button');
        this.hoverTextfield = this.page.locator('#toolTipTextField');
        this.textfieldHoverText = this.page.getByText('You hovered over the text field');
        this.contraryLinkedText = this.page.getByRole('link', { name: 'Contrary' });
        this.contraryHoverText = this.page.getByText('You hovered over the Contrary');
        this.numberHoverLinkedText = this.page.getByRole('link', { name: '1.10.32' });
        this.numberHoverText = this.page.getByText('You hovered over the 1.10.32');
        this.elementsCard = this.page.getByRole('heading', { name: 'Elements' });
        this.dynamicPropertiesOption = this.page.getByRole('link', { name: 'Dynamic Properties' });
        this.dynamicPropertiesHeading = this.page.getByRole('heading', { name: 'Dynamic Properties' });
        this.dynamicButton1 = this.page.locator('#enableAfter');
        this.dynamicButton2 = this.page.locator('#colorChange');
        this.dynamicButton3 = this.page.locator('#visibleAfter');
        this.webTablesOption = this.page.getByRole('link', { name: 'Web Tables' });
        this.webTablesHeading = this.page.getByRole('heading', { name: 'Web Tables' });

        //Browser windows page
        this.browserWindowsOption = this.page.getByRole('link', { name: 'Browser Windows' });
        this.browserWindowsHeading = this.page.getByRole('heading', { name: 'Browser Windows' });
        this.newWindowButton = this.page.getByRole('button', { name: 'New Window', exact: true});

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



    async verifyFramesOptionClick() {
        await expect(this.frameOption).toBeVisible();
        await this.frameOption.click();
        await expect(this.framesHeading).toBeVisible();
    }


    async verifyNestedFramesOptionClick() {
        await expect(this.nestedFrameOption).toBeVisible();
        await this.nestedFrameOption.click();
        await expect(this.nestedFrameHeading).toBeVisible();
    }


    async verifyInteractionsCardClick() {
        await expect(this.interactionsCard).toBeVisible();
        await this.interactionsCard.click();
        await expect(this.sortableOption).toBeVisible();
    }



    async verifyDraggingElement() {
        await expect(this.gridOne).toBeVisible();
        await this.gridOne.dragTo(this.gridSix);
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


    async verifyWidgetCardClick() {
        await expect(this.widgetCard).toBeVisible();
        await this.widgetCard.click();
        await expect(this.menuOption).toBeVisible();
    }


    async verifyElementsPageNavigate() {
        await expect(this.elementsCard).toBeVisible();
        await this.elementsCard.click();
        await expect(this.dynamicPropertiesOption).toBeVisible();
    }


    async verifyDynamicPropertiesNavigate() {
        await expect(this.dynamicPropertiesOption).toBeVisible();
        await this.dynamicPropertiesOption.click();
        await expect(this.dynamicPropertiesHeading).toBeVisible();
    }


    // Browser Window page methods

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

}