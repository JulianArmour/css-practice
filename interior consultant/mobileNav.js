'use strict';

(function () {

    function setMobileNavVisibility(visibility) {
        const mobileNav = document.getElementsByClassName('mobile-nav')[0];
        if (visibility === "visible")
            mobileNav.classList.add('visible');
        else
            mobileNav.classList.remove('visible');
    }

    function showMobileNav() {
        setMobileNavVisibility('visible')
    }

    function hideMobileNav() {
        setMobileNavVisibility('invisible')
    }

    document
        .getElementById('open-nav')
        .addEventListener('click', showMobileNav);
    document
        .getElementById('close-nav')
        .addEventListener('click', hideMobileNav)
})();