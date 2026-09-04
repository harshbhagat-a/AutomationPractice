import { test, expect } from '../../src/fixture';
import { GenerateToken } from '../../src/pages/api_pages/generateToken';
import books from '../../src/utils/data.json';


test.describe('API tests', () => {

    test('Verify Creating a user', async ({ api }) => {
        await api.verifyUserCreation();
    });

    
    test('Verify Created User', async ({ api }) => {
        await api.verifyCreatedUser();
    });


    test('get books', async ({ api }) => {
        await api.verifyGetBooks();
    });


    // test('Add book', async ({ api }) => {
    //     const isbn = books.isbns[4];
    //     await api.verifyBookAddition(isbn)
    // });



    test('Verify deleting created user', async ({ api }) => {
        await api.verifyUserDeletion('48305a24-da34-41cc-a77c-1adb4b0b1627');
    });





})