import { test, expect } from '../../src/fixture';
import { GenerateToken } from '../../src/pages/api_pages/generateToken';

test.describe('Authorization API test', () => {

    test('Verify Authorized API', async ({ APItoken, api }) => {
        await APItoken.authorizeUser(api.name);
    });

})