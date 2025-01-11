
/* SELECTORS */

let btnOpen = document.querySelector(".js-btn-open");
let btnClose = document.querySelector(".js-btn-close");


/* FUNCTIONS */

function openMenu() {
    btnOpen.setAttribute("aria-expanded", "true");
}

function closeMenu() {
    btnOpen.setAttribute("aria-expanded", "false");
}

/* EVENT LISTENERS */

btnOpen.addEventListener("click", openMenu);
btnClose.addEventListener("click", closeMenu);