//  select items from the dom
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');


//  show initial status of the menu
let showMenu = false;

//  add event listener for when the menu icons get clicked
menuBtn.addEventListener('click', toggleMenu);

//   create toggle menu function
function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        //  loop through nav items adding the classes as requires
        var timeDelay = setTimeout(() => {
            navItems.forEach(element => element.classList.add('show'));
        }, 300);

        //  reset the menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        //  loop through nav items adding the classes as requires
        navItems.forEach(element => element.classList.remove('show'));

        //  reset the menu state
        showMenu = false;

    }
}