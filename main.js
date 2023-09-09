const menuEmail = document.querySelector(".email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".shopping-cart-navright");
const BarMobile = document.querySelector(".menu");
const ListMobile = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container")

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

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/16793163/pexels-photo-16793163/free-photo-of-carretera-calle-acera-vehiculo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="">
    <div class="product-info">
                   
        <div>
            <p>$120,00</p>
            <P>Bike</P>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>




    </div>



</div> 
*/



const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/16793163/pexels-photo-16793163/free-photo-of-carretera-calle-acera-vehiculo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
});
productList.push({
    name: "Screen",
    price: 500,
    image: "https://images.pexels.com/photos/16793163/pexels-photo-16793163/free-photo-of-carretera-calle-acera-vehiculo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
});
productList.push({
    name: "Phone",
    price: 200,
    image: "https://images.pexels.com/photos/16793163/pexels-photo-16793163/free-photo-of-carretera-calle-acera-vehiculo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
});



for (product of productList){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");


    const productInfoDiv = document.createElement("div");


    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCard = document.createElement("img");
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg" );

    productInfoFigure.appendChild(productImgCard);


    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);


    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}