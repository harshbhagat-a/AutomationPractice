import { test, expect } from '../src/fixture';

test.describe('Book Store Page', () => {

    test.beforeEach('Book Store page navigation', async ({ homepage }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.bookStoreCardClick();
    });


    test('Verify Login Page navigate', async ({ bookStore }) => {
        await bookStore.verifyLoginPageNavigate();
    });


    test('Verify Username fill on Login page', async ({ bookStore }) => {
        await bookStore.verifyLoginPageNavigate();
        await bookStore.verifyUserNameFill();
    });


    test('Verify Password fill on Login page', async ({ bookStore }) => {
        await bookStore.verifyLoginPageNavigate();
        await bookStore.verifyPasswordFill();
    });



    test('Verify functionality of Login button on Login page', async ({ bookStore }) => {
        await bookStore.verifyLoginPageNavigate();
        await bookStore.verifyUserNameFill();
        await bookStore.verifyPasswordFill();
        await bookStore.verifyLoginButtonClick();
        await expect(bookStore.logoutButton).toBeVisible();
    });


    

})