import { Locator, Page, expect } from '@playwright/test';

export class AlertsPage {
    alertsOption: Locator;
    alertButton: Locator;
    promptAlertButton: Locator;
    timerAlertButton: Locator;
    confirmAlertButton: Locator;
    confirmationText: Locator;


    constructor(private page: Page) {
        //Locators
        this.alertsOption = this.page.getByRole('link', { name: 'Alerts' });
        this.alertButton = this.page.locator('#alertButton');
        this.promptAlertButton = this.page.locator('#promtButton');
        this.timerAlertButton = this.page.locator('#timerAlertButton');
        this.confirmAlertButton = this.page.locator('#confirmButton');
        this.confirmationText = this.page.locator('#confirmResult')
        
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


    async verifyTimerAlertOkClick() {
        await expect(this.timerAlertButton).toBeVisible();
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('This alert appeared after 5 seconds');
            await dialog.accept();
        });
        await this.timerAlertButton.click();
    }



    async verifyConfirmationAlertOkClick() {
        await expect(this.confirmAlertButton).toBeVisible();
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('Do you confirm action?');
            await dialog.accept();
        });
        await this.confirmAlertButton.click();
        await expect(this.confirmationText).toBeVisible();
        await expect(this.confirmationText).toHaveText('You selected Ok');
    }


    async verifyConfirmationAlertCancelClick() {
        await expect(this.confirmAlertButton).toBeVisible();
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('Do you confirm action?');
            await dialog.dismiss();
        });
        await this.confirmAlertButton.click();
        await expect(this.confirmationText).toBeVisible();
        await expect(this.confirmationText).toHaveText('You selected Cancel');
    }




}