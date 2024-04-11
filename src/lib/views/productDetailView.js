
function productDetailView(){
    const main = document.querySelector("main");
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("product-detail__view");

    mainContainer.innerHTML = /*html*/`
    <button class="button-back">
        <i class="fa-solid fa-chevron-left"></i>
    </button>
    <div class="product-detail">
        <div class="product-detail__image">
            <img src="../static/images/strawberrycroissant.png" alt="Strawberry Croissant product">
        </div>
        <div class="product-detail__product-data">
            <div class="product-data__order-now">
                <p>Order Now</p>
            </div>
            <div class="product-data__product-info">
            <p class="product-info__title">Strawberry Fields</p>
            <p class="product-info__description">Croissant filled with cream and strawberries, perfect Yum for a summer day.</p>
            </div>
            <div class="product-data__intolerances">
            <img src="../static/images/NaturalFood.svg" alt="">
            <img src="../static/images/Dairy.svg" alt="">
            <img src="../static/images/NoPeanut.svg" alt="" id="noPeanut">
            <img src="../static/images/EggFree.svg" alt="">
            </div>
            <div class="product-data__quantity">
                <div class="product-data__quantity--less"><span>-</span></div>
                    <span>1</span>
                <div class="product-data__quantity--more"><span>+</span></div>
            </div>
            <div class="product-data__add-to-cart"><p>Add to cart - 3,50€ <i class="fa-solid fa-bag-shopping"></i></p>
            </div>
        </div>
    </div>
`;

    main.appendChild(mainContainer);
}

productDetailView();