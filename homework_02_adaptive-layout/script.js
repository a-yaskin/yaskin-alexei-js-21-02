const DOMReady = function (callback) {
    document.readyState !== 'loading'
        ? callback()
        : document.addEventListener("DOMContentLoaded", callback);
};

DOMReady(function () {
    // console.log('DOM Ready is called back');

    // The function is used to open/close the Product Filter in the low width window environment
    const toggleFilter = function () {
        document.getElementsByClassName('page-layout__aside')[0]
            .classList.toggle('page-layout__aside_closed');
    };

    // Assign a listener to the filter-switch checkbox
    const filterSwitch = document.getElementById('filter-switch');
    filterSwitch.addEventListener('change', toggleFilter);

    // Reset the filter-switch checkbox when the window is not in the low width
    const mql = window.matchMedia('(min-width: 588px)');
    mql.addEventListener('change', ev => {
        if (ev.matches && !filterSwitch.checked) {
            filterSwitch.click();
        }
    });

    // Is used to switch Light/Dark themes
    const toggleTheme = function () {
        const elems = document.querySelectorAll('[class*=_theme_]');

        // Get a value of the theme (assuming that all elements have the same theme value)
        let theme = elems[0].className.match(/_theme_\w+/)[0].replace(/_theme_/, '');
        // console.log(`Theme: ${theme} for element: ${elems[0].className}`);

        const regExp = new RegExp(`${theme}`, 'gi');
        theme = theme === 'light' ? 'dark' : 'light';
        // console.log(`Theme: ${theme} for element: ${elems[0].className}`);

        elems.forEach(elem => {
            elem.className = elem.className.replaceAll(regExp, theme);
        });
    };

    // Assign a listener to the theme-switch checkbox
    document.getElementById('theme-switch').addEventListener('change', toggleTheme);
});


// if (document.readyState === "loading") {
//     document.addEventListener("DOMContentLoaded", function () {
//         // this function runs when the DOM is ready, i.e. when the document has been parsed
//         myFunction();
//         // alert('DOMContentLoaded');
//     });
// } else {
//     // Handle it asynchronously to allow scripts the opportunity to delay ready
//     setTimeout(myFunction, 1);
//     // alert('else, ' + document.readyState);
// }
//
// function myFunction() {
//     document.getElementById("user-greeting").textContent = "Welcome back, Bart";
// }



// document.addEventListener('readystatechange', event => {
//     if (event.target.readyState === 'interactive') {
//         alert('interactive');
//     } else if (event.target.readyState === 'complete') {
//         alert('complete');
//     }
// })

