import { test, expect } from '../../src/fixture';
import { GenerateToken } from '../../src/pages/api_pages/generateToken';

test.describe('Authorization API test', () => {

    test('Verify Authorized API', async ({ APItoken }) => {
        await APItoken.authorizeUser();
    });

})