import { test, expect } from '../../src/fixture';

test.describe('Select Menu Page', () => {


    test.beforeEach('Verify Select Menu Page navigation', async ({ homepage, select }) => {
        await homepage.verifyHomepageConfirmation();
        await homepage.verifyWidgetCardClick();
        await select.verifySelectMenuNavigate();
    });


    test('Verify elements on Select Menu page', async ({ select }) => {
        await select.verifySelectMenuElements();
    });



    test('Verify the functionality of Select Value Dropdown on Select Menu page', async ({ select }) => {
        await select.verifySelectValueDropdownClick();
    });



    test('Verify that user is able to select first option for Select Value Dropdown on Select Menu page', async ({ select }) => {
        await select.verifySelectValueDropdownClick();
        await select.verifySelectValueOptionSelect(1);
    });



    test('Verify that user is able to select 4 option for Select Value Dropdown on Select Menu page', async ({ select }) => {
        await select.verifySelectValueDropdownClick();
        await select.verifySelectValueOptionSelect(4);
    });



    test('Verify the functionality of Select One Dropdown on Select Menu page', async ({ select }) => {
        await select.verifySelectOneDropdownClick();
    });



    test('Verify that user is able to select first option for Select One Dropdown on Select Menu page', async ({ select }) => {
        await select.verifySelectOneDropdownClick();
        await select.verifySelectValueOptionSelect(1);
    });


})