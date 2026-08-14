import { test, expect } from '../../src/fixture';
import { testdata } from '../../src/utils/testdata';

test.describe('Broken Links - Images Page', () => {

  test.beforeEach('Verify Web Tables page navigation', async ({ homepage, brokenLinks }) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyElementsPageNavigate();
    await brokenLinks.verifyBrokenLinksNavigate();
  });


  test('Verify Add button functionality on Web Tables page', async ({ brokenLinks }) => {
    await brokenLinks.verifyBrokenLinksElements();
  });


})