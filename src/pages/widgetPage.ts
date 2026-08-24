import { Locator, Page, expect } from '@playwright/test';

export class WidgetPage {
    menuOption: Locator;
    menuHeading: Locator;
    mainItem2: Locator;
    subItem: Locator;
    subSubList: Locator;
    subSubItem1: Locator;
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
    numberHoverLinkedText: Locator;
    numberHoverText: Locator;
   
    

    constructor(private page: Page) {
        //Locators
        this.menuOption = this.page.getByRole('link', { name: 'Menu', exact: true });
        this.menuHeading = this.page.getByRole('heading',{name: 'Menu'});
        this.mainItem2 = page.getByText('Main Item 2', { exact: true });
        this.subItem = page.getByText('Sub Item', { exact: true }).first();
        this.subSubList = page.getByText('SUB SUB LIST »', { exact: true });
        this.subSubItem1 = page.getByText('Sub Sub Item 1', { exact: true });
        this.sliderOption = this.page.getByRole('link',{name: 'Slider'});
        this.sliderHeading = this.page.getByRole('heading',{name: 'Slider'});
        this.sliderElement = this.page.locator('.range-slider');
        this.sliderValueElement = this.page.locator('#sliderValue');
        this.tooltipOption = this.page.getByRole('link',{name: 'Tool Tips'});
        this.tooltipHeading = this.page.getByRole('heading',{name: 'Tool Tips'});
        this.hoverMeButton = this.page.getByRole('button',{name: 'Hover me to see'});
        this.buttonHoverText = this.page.getByText('You hovered over the Button');
        this.hoverTextfield = this.page.locator('#toolTipTextField');
        this.textfieldHoverText = this.page.getByText('You hovered over the text field');
        this.contraryLinkedText = this.page.getByRole('link',{name: 'Contrary'});
        this.contraryHoverText = this.page.getByText('You hovered over the Contrary');
        this.numberHoverLinkedText = this.page.getByRole('link',{name:'1.10.32'});
        this.numberHoverText = this.page.getByText('You hovered over the 1.10.32');
        
    }


    async verifyMenuPageNavigation(){
        await expect(this.menuOption).toBeVisible();
        await this.menuOption.click();
        await expect(this.menuHeading).toBeVisible();
    }


    async verifyHoveringMenu(){
        await this.mainItem2.hover();
        await expect(this.subItem).toBeVisible();
    }


    async verifyHoveringSubmenu(){
        await this.subSubList.hover();
        await this.page.waitForTimeout(1000);
        await expect(this.subSubItem1).toBeVisible();
    }


    async verifySliderPageNavigate(){
        await expect(this.sliderOption).toBeVisible();
        await this.sliderOption.click();
        await expect(this.sliderHeading).toBeVisible();
    }


    async verifySliderFunctionality(){
        await expect(this.sliderElement).toBeVisible();
        await this.sliderElement.fill('50')
        await expect(this.sliderElement).toHaveValue('50');
    }


    async verifySliderUsingValue(){
        await expect(this.sliderElement).toBeVisible();
        await this.sliderElement.fill('50')
        await expect(this.sliderValueElement).toHaveValue('50');
    }


    async verifyTooltipPageNavigation(){
        await expect(this.tooltipOption).toBeVisible();
        await this.tooltipOption.click();
        await expect(this.tooltipHeading).toBeVisible();
    }


    async verifyHoverMeButtonFunctionality(){
        await expect(this.hoverMeButton).toBeVisible();
        await this.hoverMeButton.hover();
        await expect(this.buttonHoverText).toBeVisible();
    }
    

    async verifyHoverMeTextfieldFunctionality(){
        await expect(this.hoverTextfield).toBeVisible();
        await this.hoverTextfield.hover();
        await expect(this.textfieldHoverText).toBeVisible();
    }


    async verifyContraryLinkedTextHover(){
        await expect(this.contraryLinkedText).toBeVisible();
        await this.contraryLinkedText.hover();
        await this.page.waitForTimeout(1000);
        await expect(this.contraryHoverText).toBeVisible();
    }


    async verifyNumberLinkedTextHover(){
        await expect(this.numberHoverLinkedText).toBeVisible();
        await this.numberHoverLinkedText.hover();
        await this.page.waitForTimeout(1000);
        await expect(this.numberHoverText).toBeVisible();
    }

    
}