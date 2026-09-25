import { test, expect } from '../../src/fixture';

test.describe('Progress Bar Page', () => {


    test.beforeEach('Verify Progress Bar page navigation', async ({ homepage, progress }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.verifyWidgetCardClick();
        await progress.verifyProgressBarNavigate();
    });



    test('Verify Progress bar stop at 50 in Progress Bar page', async ({ progress }) => {
        await progress.verifyProgressBarStop(50);
    });



    test('Verify Progress bar stop at 25 in Progress Bar page', async ({ progress }) => {
        await progress.verifyProgressBarStop(25);
    });




})