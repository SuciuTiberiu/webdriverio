import homePage from "../pages/home-page.js";

describe('Navigation Menu' , () => {
    it('Get the text of all menu items & assert them', async () => {
        // hardcoded timeout
        // browser.pause(5000);
        // await browser.url('/');
        await homePage.open();

        const expectedLinks = [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account"
    ];

        const actualLinks = [];   

        //const navLinks = await $('#primary-menu').$$('li[id*=menu]');
        // const navLinks = await $$('#primary-menu li[id*=menu]');
        // const navLinks = await $$('#zak-primary-menu li[id*=menu]');
        const navLinks = await homePage.NavComponent.linksNavMenu;

        for(const link of navLinks) {
            actualLinks.push(await link.getText());
        }

        await expect(actualLinks).toEqual(expectedLinks);
    });

    it('Get the text of all menu items & assert them - using wait commands', async () => {
        // hardcoded timeout
        // browser.pause(5000);

        // await browser.url('-/');
        await homePage.open();

        const expectedLinks = ["Home","About","Shop","Blog","Contact","My account"];

        const actualLinks = [];

        //await $('#primary-menu').waitForDisplayed({timeout: 1000});

        // wait until the Home text is displayed on the navigation menu
        await browser.waitUntil(async function() {          
            // const homeText = await $('#menu-item-489').getText(); //Home   
            const homeText = await homePage.NavComponent.firstNavMenuList.getText();
            // console.log(homeText);
            // eslint-disable-next-line wdio/no-pause
            browser.pause(10000);
            return homeText === "Home"; // true | false 
        },{
            timeout: 5000,
            timeoutMsg: 'Could not verify the Home text from #menu-item-489'
        });

        // const navLinks = await $('#primary-menu').$$('li[id*=menu]');
        // const navLinks = await $$('#primary-menu li[id*=menu]');
        const navLinks = await homePage.NavComponent.linksNavMenu;

        for(const link of navLinks) {
            actualLinks.push(await link.getText());
        }

        await expect(actualLinks).toEqual(expectedLinks);
    });
});