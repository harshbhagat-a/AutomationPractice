import { APIRequestContext, Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';
import { ApiEndpoints } from '../../utils/APIendpoints';
import { generateUniqueUsername } from '../../utils/genericMethods';
import fs from 'fs';

export class API {



    constructor(private request: APIRequestContext) { }

    async verifyUserCreation() {
        const response = await this.request.post(ApiEndpoints.user, {
            data: {
                userName: generateUniqueUsername(),
                password: testdata.password
            }
        });
        const responseBody = await response.json();
        await expect(response.status()).toBe(201);
        console.log(responseBody);
        return responseBody.userId;
    }



    async verifyUserDeletion(userid: String) {
        const response = await this.request.delete(ApiEndpoints.user, {
            data: {
                UserId: userid,
            }
        });
        await expect(response.status()).toBe(200);
        console.log(response);
    }



    async verifyCreatedUser(userid: String) {
        const response = await this.request.get(ApiEndpoints.userDetails, {
            data: {
                UserId: userid,
            }
        });
        await expect(response.status()).toBe(200);
        console.log(response);
    }



    async verifyGetBooks() {
        const response = await this.request.get(ApiEndpoints.getBooks, {
        });
        await expect(response.status()).toBe(200);
        const responseBody = await response.json();
        const isbns = responseBody.books.map((book: any) => book.isbn);

        fs.writeFileSync(
            'src/utils/data.json',
            JSON.stringify({ isbns }, null, 4)
        );
    }


    async verifyBookAddition(userid: String, isbnNo: String) {
        const response = await this.request.post(ApiEndpoints.userDetails, {
            data: {
                UserId: userid,
                collectionOfIsbns: [
                    {
                        isbn: isbnNo
                    }
                ]
            }
        });
        //await expect(response.status()).toBe(201);
        console.log(response);
    }

}