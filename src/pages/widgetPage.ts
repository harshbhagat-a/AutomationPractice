import { Locator, Page, expect } from '@playwright/test';

export class WidgetPage {
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