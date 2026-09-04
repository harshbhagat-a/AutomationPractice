import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';

export class LinksPage {
    linksOption: Locator;
    linksHeading: Locator;
    newTabHeading: Locator;
    apiCallHeading: Locator;
    homeLinkedText: Locator;
    homebPDgyLinkedText: Locator;
    createdLinkedText: Locator;
    noContentLinkedText: Locator;
    movedLinkedText: Locator;
    badRequestLinkedText: Locator;
    unauthorizedLinkedText: Locator;
    forbiddenLinkedText: Locator;
    notFoundLinkedText: Locator;
    
   


    constructor(private page: Page) {
        //Locators
        this.linksOption = this.page.getByRole('link',{name: 'Links', exact: true});
        this.linksHeading = this.page.getByRole('heading',{name: 'Links', exact: true});
        this.newTabHeading = this.page.getByRole('heading',{name: 'Following links will open new tab', exact: true});
        this.apiCallHeading = this.page.getByRole('heading',{name: 'Following links will send an api call', exact: true});
        this.homeLinkedText = this.page.getByRole('link',{name: testdata.home, exact: true});
        this.homebPDgyLinkedText = this.page.locator('#dynamicLink');
        this.createdLinkedText = this.page.getByRole('link',{name: testdata.created});
        this.noContentLinkedText = this.page.getByRole('link',{name: testdata.noContent});
        this.movedLinkedText = this.page.getByRole('link',{name: testdata.moved});
        this.badRequestLinkedText = this.page.getByRole('link',{name: testdata.badRequest});
        this.unauthorizedLinkedText = this.page.getByRole('link',{name: testdata.unauthorized});
        this.forbiddenLinkedText = this.page.getByRole('link',{name: testdata.forbidden});
        this.notFoundLinkedText = this.page.getByRole('link',{name: testdata.notFound});
        
    }


    async verifyLinksPageNavigation(){
        await expect(this.linksOption).toBeVisible();
        await this.linksOption.click();
        await expect(this.linksHeading).toBeVisible();
    }



    async verifyLinksPageElements(){
        const locators: Locator[] = [
            this.linksHeading, this.newTabHeading, this.homeLinkedText, this.homebPDgyLinkedText ,this.apiCallHeading, this.createdLinkedText,
            this.noContentLinkedText, this.movedLinkedText, this.badRequestLinkedText, this.unauthorizedLinkedText, this.forbiddenLinkedText, this.notFoundLinkedText
        ];
        for (const locator of locators) {
            await expect(locator).toBeVisible();
        }
    }


    async verifyHomeLinkedTextCLick(){
        await expect(this.homeLinkedText).toBeVisible();
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'), this.homeLinkedText.click()
        ]);
        await expect(newPage).toHaveURL(process.env.BASE_URL!);
    }

    

    
}