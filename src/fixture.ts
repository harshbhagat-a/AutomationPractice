import { test as base } from '@playwright/test';
import { HomePage } from './pages/homepage';
import { WebTablesPage } from './pages/elements/webTablesPage';

type MyFixtures = {
    homepage: HomePage;
    webTable: WebTablesPage;
};

export const test = base.extend<MyFixtures>({

    homepage: async({ page }, use) => {
        const homepage = new HomePage(page);
        await use(homepage);
    },

    webTable: async({ page }, use) =>{
        const webTable = new WebTablesPage(page);
        await use(webTable);
    }
});

export { expect } from '@playwright/test';