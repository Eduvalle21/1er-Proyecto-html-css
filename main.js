const menuEmail = document.querySelector(".email");
const desktopMenu = document.querySelector(".desktop-menu");
const BarMobile = document.querySelector(".menu");
const ListMobile = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
BarMobile.addEventListener("click", toggleListMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}


function toggleListMenu(){
    ListMobile.classList.toggle("inactive")
}