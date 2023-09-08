const menuEmail = document.querySelector(".email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".shopping-cart-navright");
const BarMobile = document.querySelector(".menu");
const ListMobile = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
BarMobile.addEventListener("click", toggleListMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);



function toggleDesktopMenu(){
    const asideclose = aside.classList.contains("inactive");


    if(!asideclose){
        aside.classList.add("inactive");
        
    }

    desktopMenu.classList.toggle("inactive");
}


function toggleListMenu(){
    const asideclose = aside.classList.contains("inactive");


    if(!asideclose){
        aside.classList.add("inactive");
        
    }

    ListMobile.classList.toggle("inactive");
}




function toggleCarritoAside(){
    const mobileMenuClose = ListMobile.classList.contains("inactive");
    const menuDesktopclose = desktopMenu.classList.contains("inactive")


    if(!mobileMenuClose){
        ListMobile.classList.add("inactive");
        
    }
    if(!menuDesktopclose){
        desktopMenu.classList.add("inactive");
        
    }

    aside.classList.toggle("inactive");


}