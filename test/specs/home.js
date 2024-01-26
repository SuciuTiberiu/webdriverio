import HomePage from '../pages/home-page.js';

describe('Home', () => {

// before(async () => {
//     console.log('THIS COULDD BE USE AS TEST SETUP');
// })

beforeEach(async () => {
    console.log('THIS RUNS BEFORE EACH TEST');
    //Open URL
    await HomePage.open();
})

// after(async () => {
//     console.log('THIS COULDD BE USE FOR TEST CLEANUP');
// })

// afterEach(async () => {
//     console.log('THIS RUNS AFTER EACH TEST');
   
// })

    it('Opens URL & assert title', async () => {
        //Open URL
        // await browser.url('https://practice.sdetunicorns.com');
        // await HomePage.open();
        
        // Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.');
    });

    it('Opens URL & assert URL', async () => {
        //Open About page
        await browser.url('https://practice.sdetunicorns.com/about');
        
        // Assert URL
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
    });

    it('Click get started btn & assert get-started text', async () => {
        //Open Home Page
        // await browser.url('https://practice.sdetunicorns.com');
        // await HomePage.open();

        // Click get started button
        // await $('#get-started').click();
        (await HomePage.btnGetStarted).click();
        
        // Assert url contains get-started text
        await expect(browser).toHaveUrlContaining('get-started');
    });

    it('Click on logo button and assert that URL DOES NOT contain get-started text', async () => {
        // Click logo button
        // await $('//img[@alt="Practice E-Commerce Site"]').click();
        (await HomePage.imageLogo).click();
        
        // assert url DOES NOT contain get-started text
        await expect(browser).not.toHaveUrlContaining('get-started');
    });

    it('Find heading element & assert the text', async () => {
        // Open Home Page
        // await browser.url('https://practice.sdetunicorns.com');
        // await HomePage.open();

        // Find heading element
        // const headingEl = await $('.elementor-widget-container h1');
        const headingEl = await HomePage.txtHeader;

        // get the text
        const headingText = await headingEl.getText();
        
        // assert the text
        await expect(headingText).toEqual('Think different. Make different.');
    });
});