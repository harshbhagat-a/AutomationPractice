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


    
    test('Verify HomebPDgy linked text click on Links page', async ({ link }) => {
        await link.verifyHomebPDgyLinkedTextCLick();
    });



    test('Verify Created linked text click on Links page', async ({ link }) => {
        await link.verifyCreatedLinkedTextClick(link.createdLinkedText);
    });



    test('Verify No Content linked text click on Links page', async ({ link }) => {
        await link.verifyCreatedLinkedTextClick(link.noContentLinkedText);
    });



    test('Verify Moved linked text click on Links page', async ({ link }) => {
        await link.verifyCreatedLinkedTextClick(link.movedLinkedText);
    });



    test('Verify Bad Request linked text click on Links page', async ({ link }) => {
        await link.verifyCreatedLinkedTextClick(link.badRequestLinkedText);
    });



    test('Verify Unauthorized linked text click on Links page', async ({ link }) => {
        await link.verifyCreatedLinkedTextClick(link.unauthorizedLinkedText);
    });



    test('Verify Forbidden linked text click on Links page', async ({ link }) => {
        await link.verifyCreatedLinkedTextClick(link.forbiddenLinkedText);
    });



    test('Verify Not Found linked text click on Links page', async ({ link }) => {
        await link.verifyCreatedLinkedTextClick(link.notFoundLinkedText);
    });



})