import { test as base } from '@playwright/test';
import { HomePage } from './pages/homepage';

type MyFixtures = {
    homepage: HomePage;
};

export const test = base.extend<MyFixtures>({

    homepage: async({ page }, use) => {
        const homepage = new HomePage(page);
        await use(homepage);
    },
});

export { expect } from '@playwright/test';