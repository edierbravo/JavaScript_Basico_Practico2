const menuEmail = document.querySelector(`.navbar-email`);  // selector de la opcion al que se le dara click
const menuHamIcon = document.querySelector(`.menu`);
const menuCarritoIcon = document.querySelector(`.navbar-shopping-cart`);
const productDetailCloseIcon =document.querySelector(`.product-detail-close`);
const desktopMenu = document.querySelector(`.desktop-menu`); // selector de la seccion de codigo
const mobileMenu = document.querySelector(`.mobile-menu`);
const aside = document.querySelector(`#shoppingCartContainer`);
productDetailContainer = document.querySelector(`
#productDetail`);
const cardsContainer = document.querySelector(`.cards-container`);

menuEmail.addEventListener(`click`, toggleDesktopMenu); // añade evento 
menuHamIcon.addEventListener(`click`, toggleMobileMenu);
menuCarritoIcon.addEventListener(`click`, toggleCarritoAside);
productDetailCloseIcon.addEventListener(`click`, closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains(`inactive`);

    if (!isAsideClosed) {
        aside.classList.add(`inactive`);
    }

    closeProductDetailAside();
    desktopMenu.classList.toggle(`inactive`);// aparece y desaparece la clase inactive a la seccion desktopMenu
}
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains(`inactive`);

    if (!isAsideClosed) {
        aside.classList.add(`inactive`);
    }

    closeProductDetailAside();
    mobileMenu.classList.toggle(`inactive`);
}
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);
    const isDesktopMenuClosed = desktopMenu.classList.contains(`inactive`);
    const isProductDetailContainerclosed = productDetailContainer.classList.contains(`inactive`);

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add(`inactive`);
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add(`inactive`);
    }
    if (!isProductDetailContainerclosed) {
        productDetailContainer.classList.add(`inactive`);
    }

    shoppingCartContainer.classList.toggle(`inactive`);
}
function openProductDetailAside(){
    shoppingCartContainer.classList.add(`inactive`);

    productDetailContainer.classList.remove(`inactive`);
}
function closeProductDetailAside(){
    productDetailContainer.classList.add(`inactive`);
}

const porductList = [];
porductList.push({
    name: "Bike",
    price: 120,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
})
porductList.push({
    name: "Pantalla",
    price: 120,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
})
porductList.push({
    name: "Computador",
    price: 120,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
})
porductList.push({
    name: "Bike",
    price: 120,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
})
porductList.push({
    name: "Pantalla",
    price: 120,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
})
porductList.push({
    name: "Computador",
    price: 120,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
})
porductList.push({
    name: "Pantalla",
    price: 120,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
})
porductList.push({
    name: "Computador",
    price: 120,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
})

/* <div class="product-card">
    <img class="productImg" src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */
function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement(`div`);
        productCard.classList.add(`product-card`);
    
        const productImg = document.createElement(`img`);
        productImg.setAttribute(`src`,product.image);
        productImg.addEventListener(`click`,openProductDetailAside)
    
        const productInfo = document.createElement(`div`);
        productInfo.classList.add(`product-info`);
    
        const productInfoDiv = document.createElement(`div`);
    
        const productPrice = document.createElement(`p`);
        productPrice.innerText = `$`+product.price;
        const productName = document.createElement(`p`);
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement(`figure`);
        const productImgCart = document.createElement(`img`);
        productImgCart.setAttribute(`src`,`./icons/bt_add_to_cart.svg`);
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(porductList);