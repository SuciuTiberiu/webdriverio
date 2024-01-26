const path = require('path');

describe('Upload Test', () => {
    it('Simple upload test', async () => {
        //Open URL
        await browser.url('https://the-internet.herokuapp.com/upload');

        console.log(__dirname);
        //D:\wdio-course\test\specs

        // store test file path
        const filePath = path.join(__dirname, '../data/inima.png');
        
        // upload test file
        const remoteFilePath = await browser.uploadFile(filePath);
       
        // set file path value in the input field
        await $('#file-upload').setValue(remoteFilePath);     
        await $('#file-submit').click(); // click Submit button
        
        // assertion
        await expect($('h3')).toHaveText('File Uploaded!');
    });

    it('Upload on hidden input field', async () =>{
        // Open URL
        await browser.url('/cart');

        // store test file path
        const filePath = path.join(__dirname, '../data/inima.png');

        //upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        // remove hidden class
        await browser.execute("document.querySelector('#upfile_1').className = ''");

        // set file path value in the input field
        await $('#upfile_1').setValue(remoteFilePath);     
        await $('#upload_1').click(); // click Submit button

        // assertion
        await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully');
    });
});