import { text } from 'node:stream/consumers';
import { test, expect } from '../../src/fixture';
import { testdata } from '../../src/utils/testdata';

test.describe('Check Box page', () => {

  test.beforeEach('Verify Text Box page navigation', async ({ homepage, checkbox}) => {
    await homepage.verifyHomepageConfirmation();
    await homepage.verifyElementsPageNavigate();
    await checkbox.verifyCheckBoxPageNavigate();
  });


    test('Verify elements visible on Check Box page', async ({ checkbox }) => {
        await checkbox.verifyCheckBoxPageElements();
    });




})