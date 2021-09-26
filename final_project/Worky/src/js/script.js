const burger = document.querySelector('.nav__menu-icon');
if (burger) {
    const navMenu = document.querySelector('.nav__menu');
    burger.addEventListener("click", function() {
        burger.classList.toggle('_active');
        navMenu.classList.toggle('_active');
    })
}
