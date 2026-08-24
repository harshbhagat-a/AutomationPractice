import { test, expect } from '../../src/fixture';
import { testdata } from '../../src/utils/testdata';

test.describe('Broken Links - Images Page', () => {

  test.beforeEach('Verify Web Tables page navigation', async ({ homepage, brokenLinks }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyElementsPageNavigate();
    await brokenLinks.verifyBrokenLinksNavigate();
  });


  test('Verify elements visible on Broken Links and Images page', async ({ brokenLinks }) => {
    await brokenLinks.verifyBrokenLinksElements();
  });



  test('Verify functionality of Valid Link on Broken Links and Images page', async ({ brokenLinks, homepage }) => {
    await brokenLinks.verifyValidLinkClick();
    await expect(homepage.adBanner).toBeVisible();
  });



  test('Verify functionality of Broken Link on Broken Links and Images page', async ({ brokenLinks }) => {
    await brokenLinks.verifyBrokenLinkClick();
  });


})