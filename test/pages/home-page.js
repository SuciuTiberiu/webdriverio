import NavComponent from './components/nav-comp.js'

class HomePage{
    open() {
        return browser.url('/');
    }

    get btnGetStarted(){
        return $('#get-started');
    }

    get imageLogo(){
        return $('//img[@alt="Practice E-Commerce Site"]');
    }

    get txtHeader(){
        return $('.elementor-widget-container h1');
    }

    get NavComponent() {
        return NavComponent;
    }
}

export default new HomePage();