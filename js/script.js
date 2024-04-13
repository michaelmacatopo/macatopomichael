const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

let iconCart = document.querySelector('.cart-icon');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');

iconCart.addEventListener('click', () => {
    body.classList.toggle('show-tab')
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('show-tab')
})
