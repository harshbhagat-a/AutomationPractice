import { APIRequestContext, Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';
import { ApiEndpoints } from '../../utils/APIendpoints';
import { generateUniqueUsername } from '../../utils/genericMethods';
import fs from 'fs';
import { GenerateToken } from './generateToken';
import authdata from '../authFiles/authdata.json';

export class API {
    name: String

    private generateToken: GenerateToken;

    constructor(private request: APIRequestContext) {
        this.generateToken = new GenerateToken(request);
        this.name = generateUniqueUsername();
    }

    async verifyUserCreation() {
        const response = await this.request.post(ApiEndpoints.user, {
            data: {
                userName: this.name,
                password: testdata.password
            }
        });
        const responseBody = await response.json();
        await expect(response.status()).toBe(201);
        const userId = responseBody.userID;
        fs.writeFileSync(
            'src/pages/authFIles/authdata.json',
            JSON.stringify({ userId }, null, 4)
        );
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



    async verifyCreatedUser() {
        const userid = authdata.userId;
        const response = await this.request.get(ApiEndpoints.userDetails, {
            data: {
                UserId: userid,
            }
        });
        await expect(response.status()).toBe(200);
        //console.log(response);
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


    async verifyBookAddition( isbnNo: String) {
        const token = await this.generateToken.authorizeUser(this.name);
        const userid = authdata.userId;
        console.log('UserId: ',userid);
        console.log('ISBN number: ',isbnNo)
        console.log('TOKEN: ', token);
        const response = await this.request.post(ApiEndpoints.addBook, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                userId: userid,
                collectionOfIsbns: [
                    {
                        isbn: isbnNo
                    }
                ]
            }
        });
        console.log('Status:', response.status());
        console.log('Status Text:', response.statusText());
        console.log('Response:', await response.text());
        await expect(response.status()).toBe(201);
    }

}
