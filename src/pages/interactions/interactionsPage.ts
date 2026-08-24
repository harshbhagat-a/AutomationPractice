import { Locator, Page, expect } from '@playwright/test';

export class InteractionsPage {
    interactionsCard: Locator;
    sortableOption: Locator;
    gridButton: Locator;
    gridOne: Locator;
    gridSix: Locator;
    gridItems: Locator;
    listOne: Locator;
    listFour: Locator;
    listItems: Locator;
    selectableOption: Locator;
    firstSelectable: Locator;
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

    constructor(private page: Page) {
        //Locators
        this.interactionsCard = this.page.getByText('Interactions', { exact: true });
        this.sortableOption = this.page.getByRole('link', { name: 'Sortable' });
        this.gridButton = this.page.getByRole('tab', { name: 'Grid' });
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


    async verifyResizingElement() {
        await expect(this.resizable).toBeVisible();
        const sizeBefore = await this.resizable.boundingBox();
        const handle = await this.resizableHandle.boundingBox();
        await this.page.mouse.move(
            handle!.x + handle!.width / 2,
            handle!.y + handle!.height / 2
        );
        await this.page.waitForTimeout(1000);
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


    async verifyDroppableNavigation(){
        await expect(this.droppableOption).toBeVisible();
        await this.droppableOption.click();
        await expect(this.droppableTitle).toBeVisible();
    }


    async verifyAcceptTabNavigation(){
        await expect(this.acceptTabButton).toBeVisible();
        await this.acceptTabButton.click();
        await expect(this.dropAcceptableElement).toBeVisible();
    }


    async verifyDraggingDroppableElement(){
        await expect(this.dropAcceptableElement).toBeVisible();
        await expect(this.droppableArea).toBeVisible();
        await this.page.waitForTimeout(1000);
        await this.dropAcceptableElement.dragTo(this.droppableArea);
        await expect(this.droppableArea).toHaveText('Dropped!');
    }


    async verifyUnacceptedElementDropping(){
        await expect(this.unacceptableElement).toBeVisible();
        await expect(this.droppableArea).toBeVisible();
        await this.unacceptableElement.dragTo(this.droppableArea);
        await expect(this.droppableArea).toHaveText('Drop here');
    }


    async verifyResizableNavigation(){
        await expect(this.resizableOption).toBeVisible();
        await this.resizableOption.click();
        await expect(this.resizableHeading).toBeVisible();
    }
    

    
}
