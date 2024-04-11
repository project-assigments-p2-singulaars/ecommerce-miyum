import { dispatchStorageEvent, sendProductsDataToStorage } from "../search/SearchBarComponent.js";
import { getProductsDataFromStorage } from "../search/SearchProductsComponent.js";

export function ProductDashboardComponent( product ){

  const productEl = document.createElement('article');
  productEl.classList.add('products__item');
  productEl.setAttribute('data-id', product.id);

  productEl.innerHTML = /* html */`
    <span class="item__price">${product.price}€</span>
    <img src=${product.image_url} alt="" class="item__image">
    <div class="item__details">
      <h4 class="details__title">${product.name}</h4>
      <p class="details__flavor">${product.flavor}</p>
    </div>
    <div class="item__buttons">
      <button class="buttons__edit"><i class="fa-solid fa-pen-to-square"></i></button>
      <button class="buttons__delete"><i class="fa-solid fa-trash"></i></button>
    </div>
  `;


  const deleteButton = productEl.querySelector('.buttons__delete');
  deleteButton.addEventListener('click', async ( e ) => {

    if ( e.target.classList.contains('fa-trash') ){
      const currentProductEl = e.target.parentElement.parentElement.parentElement;
      deleteProduct( currentProductEl.dataset.id );
    } else if( e.target.classList.contains('buttons__delete') ){
      const currentProductEl = e.target.parentElement.parentElement;
      deleteProduct( currentProductEl.dataset.id );
    }

  });

  return productEl;
}



async function deleteProduct( productId ){

  const currentStorageData = getProductsDataFromStorage() ;

  const removedProductFromData = currentStorageData.filter( ( item ) => {
    return item.id !== productId;
  })

  sendProductsDataToStorage( removedProductFromData );
  dispatchStorageEvent( removedProductFromData );
  removeProductFromDB( productId );

}

async function removeProductFromDB( productId ){

  const productUrl = 'http://localhost:3000/products/';

  try {
      await fetch(productUrl + productId, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

    } catch (error) {
      console.error('Error deleting product:', error);
    }

}