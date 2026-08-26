import { APIRequestContext, Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';
import { ApiEndpoints } from '../../utils/APIendpoints';

export class GenerateToken {
    

    constructor(private request: APIRequestContext) {}

    async authorizeUser() {

        const response = await this.request.post(ApiEndpoints.generateToken, {
            data: {
                userName: testdata.userName,
                password: testdata.password
            }
        });
        const responseBody = await response.json();
        await expect(response.status()).toBe(200);
        return responseBody.token;
    }



    
}