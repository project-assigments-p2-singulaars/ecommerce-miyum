
export function ProductSearchComponent( product ){
  
  const productEl = document.createElement('article');
  productEl.classList.add('products__item');
  productEl.dataset.id = product.id;

  productEl.innerHTML = /* html */`
    <span class="item__price">${product.price}€</span>
    <img src=${product.image_url} alt="" class="item__image">
    <h4 class="item__title">${product.name}</h4>
    <p class="item__flavor">${product.flavor}</p>
  `;

  productEl.addEventListener('click', handleProductClick);


  return productEl;
}


function handleProductClick( e ){

  if( e.target.dataset.id ){
    localStorage.setItem('product-selected', e.target.dataset.id);
  }

  window.location.href = '/src/pages/product-detail-view.html';

}