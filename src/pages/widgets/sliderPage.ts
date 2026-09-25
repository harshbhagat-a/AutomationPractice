import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';

export class SliderPage {
    sliderOption: Locator;
    sliderHeading: Locator;
    sliderElement: Locator;
    sliderValueElement: Locator;

    constructor(private page: Page) {
        //Locators
        this.sliderOption = this.page.getByRole('link',{name: 'Slider'});
        this.sliderHeading = this.page.getByRole('heading',{name: 'Slider'});
        this.sliderElement = this.page.locator('.range-slider');
        this.sliderValueElement = this.page.locator('#sliderValue');
        
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




    
}