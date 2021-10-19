const DOMReady = function (callback) {
    document.readyState !== 'loading'
        ? callback()
        : document.addEventListener("DOMContentLoaded", callback);
};

DOMReady(function () {

    // The function is used to open/close the Product Filter in the low width window environment
    const toggleFilter = function () {
        document.getElementsByClassName('page-layout__aside')[0]
            .classList.toggle('page-layout__aside_closed');
    };

    // Assign a listener to the filter-switch checkbox
    const filterSwitch = document.getElementById('filter-switch');
    filterSwitch.addEventListener('change', toggleFilter);

    // Force the filter-switch checkbox to be checked when the window is not in the low width condition
    const mql = window.matchMedia('(min-width: 588px)');
    mql.addEventListener('change', ev => {
        if (ev.matches && !filterSwitch.checked) {
            filterSwitch.click();
        }
    });

    // Is used to switch Light/Dark themes
    const toggleTheme = function () {
        const elems = document.querySelectorAll('[class*="_theme_"]');

        // Get a value of the theme
        let theme = elems[0].className
            .match(/_theme_\w+/)[0]     // Take the first element assuming all elements have the same theme value
            .replace(/_theme_/, '');

        const regExp = new RegExp(`${theme}`, 'gi');
        theme = theme === 'light' ? 'dark' : 'light';

        elems.forEach(elem => {
            elem.className = elem.className.replaceAll(regExp, theme);
        });
    };

    // Assign a listener to the theme-switch checkbox
    document.getElementById('theme-switch')
        .addEventListener('change', toggleTheme);
});
