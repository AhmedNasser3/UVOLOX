/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener("click", () => {
        // Add show-menu class to nav menu
        nav.classList.toggle("show-menu");

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle("show-icon");
    });
};

showMenu("nav-toggle", "nav-menu");

// animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
const hiddenElements = document.querySelectorAll(".hero__data");
hiddenElements.forEach((el) => observer.observe(el));

// st__text

const show_st__text = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show_st__text");
        } else {
            entry.target.classList.remove("show_st__text");
        }
    });
});
const Sec__menu = document.querySelectorAll(".st__text");
Sec__menu.forEach((el) => show_st__text.observe(el));

// st__image
const show_st__img = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show_st__img");
        } else {
            entry.target.classList.remove("show_st__img");
        }
    });
});
const st__img = document.querySelectorAll(".st__image");
st__img.forEach((el) => show_st__img.observe(el));