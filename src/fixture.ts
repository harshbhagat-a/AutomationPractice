import { test as base } from '@playwright/test';
import { HomePage } from './pages/homepage';
import { WebTablesPage } from './pages/elements/webTablesPage';
import { BrokenLinksPage } from './pages/elements/brokenLinksPage';
import { FormsPage } from './pages/forms/formsPage';

type MyFixtures = {
    homepage: HomePage;
    webTable: WebTablesPage;
    brokenLinks: BrokenLinksPage;
    forms: FormsPage;
};

export const test = base.extend<MyFixtures>({

    homepage: async({ page }, use) => {
        const homepage = new HomePage(page);
        await use(homepage);
    },

    webTable: async({ page }, use) =>{
        const webTable = new WebTablesPage(page);
        await use(webTable);
    },

    brokenLinks: async({ page }, use) =>{
        const brokenLinks = new BrokenLinksPage(page);
        await use(brokenLinks);
    },


    forms: async({ page }, use) =>{
        const forms = new FormsPage(page);
        await use(forms);
    },



});

export { expect } from '@playwright/test';