class NavComponent {
    get linksNavMenu() {
        return $$('#zak-primary-menu li[id*=menu]');
    }

    get firstNavMenuList() {
        return $('//*[@id="menu-item-489"]/a');
    }
}

export default new NavComponent();