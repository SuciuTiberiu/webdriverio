import ContactPage from "../pages/contact-page.js";
import {faker} from '@faker-js/faker';

describe("Contact", () => {
    it('Get the success text from filling the form & assert it', async () => {
        // Long way
        // await browser.url('/');
        // Click Contact page
        // await $('#primary-menu li[id=menu-item-493]').click();
        // Assert url contains contact
        // await expect(browser).toHaveUrlContaining('contact');
        // // Fill in the form
        // // insert Name
        // await $('#evf-277-field_ys0GeZISRs-1').setValue('Tiberiu Suciu');
        // // insert Email
        // await $('#evf-277-field_LbH5NxasXM-2').setValue('suciu_tiberiu89@yahoo.com');
        // // insert Phone
        // await $('#evf-277-field_66FR384cge-3').setValue('0744495223');
        // // insert Message
        // await $('#evf-277-field_yhGx3FOwr2-4').setValue('the form is completed');
        // // click submit button
        // await $('#evf-submit-277').click();
        // // Assert success message
        // const expectedText = await $('//div[2]/div/div/div/div/div/div/div').getText();
        // await expect(expectedText).toEqual('Thanks for contacting us! We will be in touch with you shortly');

        await ContactPage.open();
        // await browser.url('https://practice.sdetunicorns.com/contact')
        // Fill in form and click submit
        // await ContactPage.contactName.addValue('test Name');
        // await ContactPage.contactEmail.addValue('test@email.com');
        // await ContactPage.contactPhone.addValue('1234567890');
        // await ContactPage.contactMessage.addValue('test Name');
        // await ContactPage.submitButton.click();

        // await ContactPage.submitForm('Test Name','test@email.com','1234567890','test Name');
        await ContactPage.submitForm(faker.person.firstName('male'), faker.internet.email(), faker.phone.number('+40 ## ### ## ##'), faker.lorem.paragraphs(2));

        // Assert the success message
        const successAleert = ContactPage.successAlert;
        await expect(successAleert).toHaveTextContaining('Thanks for contacting us! We will be in touch with you shortly');
    });
});