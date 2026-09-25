import { APIRequestContext, Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';
import { ApiEndpoints } from '../../utils/APIendpoints';
import fs from 'fs';

export class GenerateToken {
    

    constructor(private request: APIRequestContext) {}

    async authorizeUser(userName: String) {
        const name = userName;
        const response = await this.request.post(ApiEndpoints.generateToken, {
            data: {
                userName: name,
                password: testdata.password
            }
        });
        const responseBody = await response.json();
        const Token = responseBody.token;
        console.log(responseBody);
        fs.writeFileSync(
            'src/pages/authFIles/authToken.json',
            JSON.stringify({ Token }, null, 4)
        );
        await expect(response.status()).toBe(200);
        return responseBody.token;
    }



    
}