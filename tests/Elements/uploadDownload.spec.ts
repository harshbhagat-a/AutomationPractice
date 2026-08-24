import { test, expect } from '../../src/fixture';

test.describe('Upload and Download Page', () => {

    test.beforeEach('Verify Upload and Download page navigation', async ({ homepage, upload }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.verifyElementsPageNavigate();
        await upload.verifyUploadAndDownloadNavigate();
    });


    test('Verify Upload and Download page elements', async ({ upload }) => {
        await upload.verifyPageElements();
    });



    test('Verify functionality of Download button on Upload and Download page', async ({ upload }) => {
        await upload.verifyDownloadButtonClick();
    });



    test('Verify File Upload on Upload and Download page', async ({ upload }) => {
        await upload.verifyFileUpload();
    });



})