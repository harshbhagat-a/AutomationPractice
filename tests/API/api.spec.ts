import { test, expect } from '../../src/fixture';
import { GenerateToken } from '../../src/pages/api_pages/generateToken';
import books from '../../src/utils/data.json';

let userId: string;

test.describe('API tests', () => {

    test('Verify Creating a user', async ({ api }) => {
        userId = await api.verifyUserCreation();
    });

    
    test('Verify Created User', async ({ api }) => {
        await api.verifyCreatedUser(userId);
    });


    test('get books', async ({ api }) => {
        await api.verifyGetBooks();
    });


    // test.only('Add book', async ({ api }) => {
    //     const isbn = books.isbns[0];
    //     await api.verifyBookAddition(userId, isbn)
    // });



    test('Verify deleting created user', async ({ api }) => {
        await api.verifyUserDeletion('48305a24-da34-41cc-a77c-1adb4b0b1627');
    });





})