import { test, expect } from '../src/fixture';

test.describe('Book Store Application Section', () => {

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



    test('Verify Login Page Elements', async ({ bookStore }) => {
        await bookStore.verifyLoginPageNavigate();
        await bookStore.verifyLoginPageElements();
    });



    test('Verify Book Store Page navigation', async ({ bookStore }) => {
        await bookStore.verifyLoginPageNavigate();
        await bookStore.verifyLoginFlow();
        await bookStore.verifyBookStorePageNavigate();
    });



    test('Verify Book detail Page navigate without login', async ({ bookStore }) => {
        await bookStore.verifyBookStorePageNavigate();
        await bookStore.verifyBookDetailPageNavigate(2);
        await expect(bookStore.backToBookStoreButton).toBeVisible();
    });


    test('Verify adding only non added book to collection.', async ({ bookStore }) => {
        await bookStore.verifyLoginPageNavigate();
        await bookStore.verifyLoginFlow();
        await bookStore.verifyProfilePageNavigate();
        await bookStore.saveAddedBookNames();
        await bookStore.verifyBookStorePageNavigate();
        await bookStore.verifyAddingNewBooks();
    });

    

})

test.describe('Book Store Page', () => {

    test.beforeEach('Book Store page navigation', async ({ homepage, bookStore }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.bookStoreCardClick();
        await bookStore.verifyLoginPageNavigate();
        await bookStore.verifyLoginFlow();
        await bookStore.verifyBookStorePageNavigate();
    });


    test('Verify Book detail Page navigate after login', async ({ bookStore }) => {
        await bookStore.verifyBookDetailPageNavigate(1);
        await expect(bookStore.addToYourCollectionButton).toBeVisible();
    });



    test('Verify Add To Collection button click on Book details page.', async ({ bookStore }) => {
        await bookStore.verifyBookDetailPageNavigate(1);
        await expect(bookStore.addToYourCollectionButton).toBeVisible();
        await bookStore.verifyAddToCollectionClick();
    });


})





test.describe('Profile Page', () => {

    test.beforeEach('Profile page navigation', async ({ homepage, bookStore }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.bookStoreCardClick();
        await bookStore.verifyLoginPageNavigate();
        await bookStore.verifyLoginFlow();
        await bookStore.verifyProfilePageNavigate();
    });



    test('Verify Delete icon click for added book', async ({ bookStore }) => {
        await bookStore.verifyDeleteIconClick();
    });



    test('Verify Delete Book popup elements on Profile page', async ({ bookStore }) => {
        await bookStore.verifyDeleteIconClick();
        await bookStore.verifyDeleteBookPopupElements();
    });



})