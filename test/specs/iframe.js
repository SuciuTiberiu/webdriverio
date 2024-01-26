describe('IFrame', () =>{
    it('Working with iframe', async () => {
        // open URL
        await browser.url('https://practice.sdetunicorns.com/iframe-sample/');

        await expect(browser).toHaveUrlContaining('iframe-sample');

        // const iframe = await $('//iframe[@src="https://automationbro.com/"]');

        // console.log(iframe);

        // const sdet = await iframe.getAttribute('src');

        // console.log('this is the link');
        // console.log(sdet);
        // console.log('the link');

        // await browser.url(sdet);
        // await expect(browser).toHaveUrlContaining('sdet');

        // access iframe
        const iframe = await $('//iframe[@src="https://automationbro.com/"]');
        await browser.switchToFrame(iframe);

        // verify logo exists
        await expect($('//img[@src="https://sdetunicorns.com/wp-content/uploads/2023/03/logo-1.png"]')).toExist();

        // switch to parent frame
        await browser.switchToParentFrame();
        
        // verify page title
        await expect($('h1.zak-page-title')).toHaveText('IFrame Sample');
    });
});

// // Get the iframe element
        // const iframe = $('#advanced_iframe');

        // // Execute JavaScript code in the context of the browser
        // await browser.execute(() => {
        // // Stop iframe from reloading
        // window.onbeforeunload = function() {
        //     const iframe = document.getElementById('advanced_iframe');
        //     iframe.contentWindow.location.reload(false);
        //     return false;
        // };
        // });