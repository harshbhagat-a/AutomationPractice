import { test, expect } from '../../src/fixture';

test.describe('Links Page', () => {

    test.beforeEach('Verify Links page navigation', async ({ homepage, link }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.verifyElementsPageNavigate();
        await link.verifyLinksPageNavigation();
    });



    test('Verify Links page elements', async ({ link }) => {
        await link.verifyLinksPageElements();
    });



    test('Verify Home linked text click on Links page', async ({ link }) => {
        await link.verifyHomeLinkedTextCLick();
    });


    


})