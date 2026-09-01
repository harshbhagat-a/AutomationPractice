import { test as base } from '@playwright/test';
import { HomePage } from './pages/homepage';
import { WebTablesPage } from './pages/elements/webTablesPage';
import { BrokenLinksPage } from './pages/elements/brokenLinksPage';
import { FormsPage } from './pages/forms/formsPage';
import { AlertsPage } from './pages/alert_frames_windows/alertsPage';
import { FramesPage } from './pages/alert_frames_windows/framesPage';
import { NestedFramesPage } from './pages/alert_frames_windows/nestedFramesPage';
import { InteractionsPage } from './pages/interactions/interactionsPage';
import { WidgetPage } from './pages/widgetPage';
import { testdata } from './utils/testdata';
import { DynamicElementsPage } from './pages/elements/dynamicElementsPage';
import { UploadDownloadPage } from './pages/elements/uploadDownloadPage';
import { BrowserWindowsPage } from './pages/alert_frames_windows/browserWindowsPage';
import { DraggablePage } from './pages/interactions/draggablePage';
import { BookStorePage } from './pages/bookStorePage';
import { GenerateToken } from './pages/api_pages/generateToken';
import { request } from 'node:http';
import { API } from './pages/api_pages/api';
import { ButtonsPage } from './pages/elements/buttonsPage';
import { ProgressBarPage } from './pages/widgets/progressbarPage';
import { MenuPage } from './pages/widgets/menuPage';
import { SliderPage } from './pages/widgets/sliderPage';
import { SelectMenuPage } from './pages/widgets/selectMenuPage';

type MyFixtures = {
    homepage: HomePage;
    webTable: WebTablesPage;
    brokenLinks: BrokenLinksPage;
    forms: FormsPage;
    alerts: AlertsPage;
    frames: FramesPage;
    nestedFrame: NestedFramesPage;
    interactions: InteractionsPage;
    widget: WidgetPage;
    testData: typeof testdata;
    dynamic: DynamicElementsPage;
    upload: UploadDownloadPage;
    browserWindow: BrowserWindowsPage;
    drag: DraggablePage;
    bookStore: BookStorePage;
    APItoken: GenerateToken;
    api: API;
    button: ButtonsPage;
    progress: ProgressBarPage;
    menu: MenuPage;
    slider: SliderPage;
    select: SelectMenuPage;

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


    alerts: async({ page }, use) =>{
        const alerts = new AlertsPage(page);
        await use(alerts);
    },


    frames: async({ page }, use) =>{
        const frames = new FramesPage(page);
        await use(frames);
    },


    nestedFrame: async({ page }, use) =>{
        const nestedFrame = new NestedFramesPage(page);
        await use(nestedFrame);
    },


    interactions: async({ page }, use) =>{
        const interactions = new InteractionsPage(page);
        await use(interactions);
    },


    widget: async({ page }, use) =>{
        const widget = new WidgetPage(page);
        await use(widget);
    },


    testData: async ({}, use) => {
    await use(testdata);
    },


    dynamic: async({ page }, use) =>{
        const dynamic = new DynamicElementsPage(page);
        await use(dynamic);
    },


    upload: async({ page }, use) =>{
        const upload = new UploadDownloadPage(page);
        await use(upload);
    },


    browserWindow: async({ page }, use) =>{
        const browserWindow = new BrowserWindowsPage(page);
        await use(browserWindow);
    },


    drag: async({ page }, use) =>{
        const drag = new DraggablePage(page);
        await use(drag);
    },


    bookStore: async({ page }, use) =>{
        const bookStore = new BookStorePage(page);
        await use(bookStore);
    },


    APItoken: async({ request }, use) =>{
        const APItoken = new GenerateToken(request);
        await use(APItoken);
    },


    api: async({ request }, use) =>{
        const api = new API(request);
        await use(api);
    },


    button: async({ page }, use) =>{
        const button = new ButtonsPage(page);
        await use(button);
    },


    progress: async({ page }, use) =>{
        const progress = new ProgressBarPage(page);
        await use(progress);
    },


    menu: async({ page }, use) =>{
        const menu = new MenuPage(page);
        await use(menu);
    },


    slider: async({ page }, use) =>{
        const slider = new SliderPage(page);
        await use(slider);
    },


    select: async({ page }, use) =>{
        const select = new SelectMenuPage(page);
        await use(select);
    },



});

export { expect } from '@playwright/test';