import { test as base } from '@playwright/test';
import { HomePage } from './pages/homepage';
import { WebTablesPage } from './pages/elements/webTablesPage';
import { BrokenLinksPage } from './pages/elements/brokenLinksPage';

type MyFixtures = {
    homepage: HomePage;
    webTable: WebTablesPage;
    brokenLinks: BrokenLinksPage;
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
    }



});

export { expect } from '@playwright/test';