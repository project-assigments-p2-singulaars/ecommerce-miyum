import { headerTopNav } from "../headerTopNav.js";
import { navbar } from "../bottomNavBar.js";
import { searchModal } from "../modals/searchModal.js"
import { shoppingCartModal } from "../modals/shoppingCartModal.js";

async function productDetailView() {

  const productId = localStorage.getItem('product-selected');

  let productData = await fetchProductData( productId );
  const specialDiets = await getSpecialDiets( productData.special_diets );

  headerTopNav();
  navbar();
  searchModal();
  shoppingCartModal();
  renderProductItem( productData, specialDiets );

}


function renderProductItem( product, specialDiets ){

  const detailViewMainEl = document.querySelector("main.product-detail-view");
  detailViewMainEl.dataset.id = product.id;


  detailViewMainEl.innerHTML = /*html*/`
    <button class="button-back">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <article class="product-detail" data-id=${product.id}>
      <figure class="product-detail__image">
          <img src=${product.image_url} alt=${product.name}>
      </figure>
      <div class="product-detail__product-data">
        <p class="product-data__order-now">Order Now</p>
        <div class="product-data__product-info">
          <p class="product-info__title">${product.name}</p>
          <p class="product-info__description">${product.description}</p>
        </div>
        <div class="product-data__intolerances">
          ${ specialDiets.map( diet => {
            return `<img src=${diet.icon} alt=${diet.name} />`;
          }) }
        </div>
        <div class="product-data__quantity">
          <span class="product-data__quantity--less">-</span>
          <span>1</span>
          <span class="product-data__quantity--more">+</span>
        </div>
        <button class="product-data__add-to-cart">Add to cart - ${product.price}€ <i class="fa-solid fa-bag-shopping"></i></button>
      </div>
    </article>
`;

  document.querySelector('.button-back').addEventListener( 'click', handleBackButton );

}

function handleBackButton(){
  history.back();
}


export async function fetchProductData( id ){

  const endpoint = `https://miyum-service.onrender.com/products/${id}`;
  const request = await fetch( endpoint );
  const response = await request.json();

  return response;

}

export async function fetchSpecialDietData( id ){
  const endpoint = `https://miyum-service.onrender.com/special_diets/${id}`;
  const request = await fetch( endpoint );
  const response = await request.json();

  return response;
}


export async function getSpecialDiets( dietIds ){

  const specialDietsPromises = await dietIds.map( async ( dietId ) => {
    return await fetchSpecialDietData( dietId );
  });

  return await Promise.all( specialDietsPromises );

}


productDetailView();