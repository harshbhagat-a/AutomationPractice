import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../utils/testdata';

export class BookStorePage {
    loginOption: Locator;
    loginHeading: Locator;
    userNameField: Locator;
    passwordField: Locator;
    loginButton: Locator;
    errorText: Locator;
    logoutButton: Locator;
    

    constructor(private page: Page) {
        //Locators
        this.loginOption = this.page.getByRole('link',{name:'Login'});
        this.loginHeading = this.page.getByRole('heading',{level:1 ,name:'Login'});
        this.userNameField = this.page.locator('#userName');
        this.passwordField = this.page.locator('#password');
        this.loginButton = this.page.getByRole('button',{name: 'Login'});
        this.errorText = this.page.getByText('Invalid username or password!',{exact: true});
        this.logoutButton = this.page.getByRole('button',{name: 'Logout'});
    }


    async verifyLoginPageNavigate(){
        await expect(this.loginOption).toBeVisible();
        await this.loginOption.click();
        await expect(this.loginHeading).toBeVisible();
    }


    async verifyUserNameFill(){
        await expect(this.userNameField).toBeVisible();
        await this.userNameField.fill(testdata.userName);
        await expect(this.userNameField).toHaveValue(testdata.userName);
    }


    async verifyPasswordFill(){
        await expect(this.passwordField).toBeVisible();
        await this.passwordField.fill(testdata.password);
        await expect(this.passwordField).toHaveValue(testdata.password);
    }


    async verifyLoginButtonClick(){
        await expect(this.loginButton).toBeVisible();
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }



    
}