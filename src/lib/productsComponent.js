import { categorySelector } from "./categorySelector.js";

export function productsComponent( array ){

  /* MAQUETACIÓN HTML */

  const main = document.querySelector('main');

  const productsComponent = document.createElement('section');
  productsComponent.classList.add('products-component');

  const productsSection = document.createElement('section');
  productsSection.classList.add('products');

  const productsContainer = document.createElement('div');
  productsContainer.classList.add('products__container', 'padding-wrap');


  const categoryTitle = document.createElement('h3');
  categoryTitle.textContent = 'Cake Slices';
  categoryTitle.classList.add('products__title', 'padding-wrap');

  /* Append Elements */

  productsSection.appendChild(categoryTitle);


  let fetchData;

  fetch ('https://miyum-service.onrender.com/products')
    .then(response => response.json())
    .then(data => {
      fetchData = data;
    })
    .finally( () => {
      // renderProducts( fetchData, productsContainer );

      productsSection.appendChild(productsContainer);
      productsComponent.appendChild( productsSection );
      main.appendChild(productsComponent);
    });

  categorySelector( productsComponent );
}



export function renderProducts( data, productsContainer ){
  data.forEach( ( product ) => {
    const productEl = renderProductElement( product );
    productsContainer.appendChild( productEl );
  });
}


export function renderProductElement( product ) {
  const productEl = document.createElement('article');
  productEl.dataset.id = product.id;
  productEl.classList.add('products__product-card');

  const productDetailViewRoute = './pages/product-detail-view.html';

  productEl.innerHTML = /* html */`
    <a href=${productDetailViewRoute} data-id=${product.id} >
      <span class="product-card__price-tag" data-id=${product.id}>${product.price}€</span><button class="product-card__add-to-cart-btn"><i>+</i></button>
      <figure class="product-card__image" data-id=${product.id}><img src=${product.image_url} alt="${product.name}" data-id=${product.id}></figure>
      <div class="product-card__info" data-id=${product.id}>
        <h4 class="product-card__name" data-id=${product.id}>${product.name}</h4>
        <span class="product-card__category" data-id=${product.id}>${product.flavor}</span>
      </div>
    </a>
  `;

  productEl.addEventListener('click', e => {

    if( e.target.dataset.id ){
      localStorage.setItem('product-selected', e.target.dataset.id);
    }

  });


  return productEl;
}