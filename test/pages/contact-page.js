class ContactPage {
    open() {
        return browser.url('/contact');
    }

    get contactName(){
        return $('.contact-name input');
    }

    get contactEmail(){
        return $('.contact-email input');
    }

    get contactPhone(){
        return $('.contact-phone input');
    }

    get contactMessage(){
        return $('.contact-message textarea');
    }

    get submitButton(){
        return $('button[type=submit]');
    }

    get successAlert(){
        return $("[role='alert']");
    }

    async submitForm(name, email, phone, message) {
        await this.contactName.addValue(name);
        await this.contactEmail.addValue(email);
        await this.contactPhone.addValue(phone);
        await this.contactMessage.addValue(message);
        await this.submitButton.click();
    }
}

export default new ContactPage();