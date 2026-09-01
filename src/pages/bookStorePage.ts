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
    loginDescriptionText: Locator;
    welcomeText: Locator;
    newUserButton: Locator;
    profileOption: Locator;
    bookStoreOption: Locator;
    bookSearchField: Locator;
    bookTitleLinks: Locator;
    backToBookStoreButton: Locator;
    addToYourCollectionButton: Locator;
    arr: string[] = [];
    deleteIcon: Locator;
    deleteBookPopup: Locator;
    deleteBookHeading: Locator;
    crossButton: Locator;
    okButton: Locator;
    cancelButton: Locator;
    popupDescriptionText: Locator;
    

    constructor(private page: Page) {
        //Locators
        this.loginOption = this.page.getByRole('link',{name:'Login'});
        this.loginHeading = this.page.getByRole('heading',{level:1 ,name:'Login'});
        this.userNameField = this.page.locator('#userName');
        this.passwordField = this.page.locator('#password');
        this.loginButton = this.page.getByRole('button',{name: 'Login'});
        this.errorText = this.page.getByText('Invalid username or password!',{exact: true});
        this.logoutButton = this.page.getByRole('button',{name: 'Logout'});
        this.loginDescriptionText = this.page.getByText('Login in Book Store');
        this.welcomeText = this.page.getByText('Welcome,');
        this.newUserButton = this.page.getByRole('button',{name: 'New User'});
        this.profileOption = this.page.getByRole('link',{name: 'Profile'});
        this.bookStoreOption = this.page.getByRole('link',{name: 'Book Store', exact: true});
        this.bookSearchField = this.page.locator('#searchBox');
        this.bookTitleLinks = this.page.locator('.mr-2');
        this.backToBookStoreButton = this.page.getByRole('button',{name: 'Back To Book Store'});
        this.addToYourCollectionButton = this.page.getByRole('button',{name: 'Add To Your Collection'});
        this.deleteIcon = this.page.getByTitle('Delete');
        this.deleteBookPopup = this.page.locator('.modal-content');
        this.deleteBookHeading = this.page.getByText('Delete Book',{exact: true});
        this.crossButton = this.page.locator('.btn-close');
        this.popupDescriptionText = this.page.getByText('Do you want to delete this book?',{exact: true});
        this.okButton = this.deleteBookPopup.getByRole('button',{name: 'OK'});
        this.cancelButton = this.page.getByRole('button',{name: 'Cancel'});

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
        await this.page.waitForTimeout(2000);
    }


    async verifyLoginPageElements(){
        const locators: Locator[] = [
            this.loginHeading, this.welcomeText, this.loginDescriptionText, this.userNameField,
            this.passwordField, this.newUserButton, this.loginButton
        ];
        for (const locator of locators) {
            await expect(locator).toBeVisible();
        }
    }


    async verifyBookStorePageNavigate(){
        await expect(this.bookStoreOption).toBeVisible();
        await this.bookStoreOption.click();
        await expect(this.bookSearchField).toBeVisible();
    }


    async verifyLoginFlow(){
        await this.verifyUserNameFill();
        await this.verifyPasswordFill();
        await this.verifyLoginButtonClick();
        await this.page.waitForTimeout(2000);
        await expect(this.logoutButton).toBeVisible();
    }



    async verifyBookDetailPageNavigate(n: number){
        const selectedBookTitle = this.bookTitleLinks.nth(n-1);
        await expect(selectedBookTitle).toBeVisible();
        await selectedBookTitle.click();
    }



    async verifyAddToCollectionClick(){
        await expect(this.addToYourCollectionButton).toBeVisible();
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('Book added to your collection.');
            await dialog.accept();
        });
        await this.addToYourCollectionButton.click();
    }


    async saveAddedBookNames(){
        const lessonCount = await this.bookTitleLinks.count();
        for(let i=0; i<lessonCount;i++){
            const bookName = await this.bookTitleLinks.nth(i).textContent();
            this.arr.push(bookName?.trim() ?? "");
        }
    }


    async verifyProfilePageNavigate(){
        await expect(this.profileOption).toBeVisible();
        await this.profileOption.click();
        await expect(this.bookSearchField).toBeVisible();
    }


    async verifyAddingNewBooks(){
        let lessonCount = await this.bookTitleLinks.count();
        const addedBookCount = this.arr.length;
        let selectedBook = this.bookTitleLinks.first();
        for(let i=0; i<lessonCount;i++){
            let c = 0;
            const bookName = await this.bookTitleLinks.nth(i).textContent();
            for(let j=0; j<addedBookCount;j++){
                if(bookName === this.arr[j]){
                    c++;
                }
            }
            if(c>=1){
                continue;
                
            }
            else{
                selectedBook = this.bookTitleLinks.nth(i);
                break;
            }
        }
        await selectedBook.click();
        await this.verifyAddToCollectionClick();
    }


    async verifyDeleteIconClick(){
        const firstIcon = this.deleteIcon.first();
        await expect(firstIcon).toBeVisible();
        await firstIcon.click();
        await expect(this.deleteBookPopup).toBeVisible();
    }


    async verifyDeleteBookPopupElements(){
        const locators: Locator[] = [
            this.deleteBookHeading, this.crossButton, this.popupDescriptionText,
            this.okButton, this.cancelButton
        ];
        for (const locator of locators) {
            await expect(locator).toBeVisible();
        }
        
    }


    async verifyCrossIconClick(){
        await expect(this.crossButton).toBeVisible();
        await this.crossButton.click();
        await expect(this.deleteBookPopup).not.toBeVisible();
    }


    async verifyCancelButtonClick(){
        await expect(this.cancelButton).toBeVisible();
        await this.cancelButton.click();
        await expect(this.deleteBookPopup).not.toBeVisible();
    }


    async verifyOkButtonClick(){
        await expect(this.okButton).toBeVisible();
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('Book deleted.');
            await dialog.accept();
        });
        await this.okButton.click();
    }


    async verifyLogoutButtonClick(){
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
        await expect(this.loginHeading).toBeVisible();
    }



    
}