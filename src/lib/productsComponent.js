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

  fetch ('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
      fetchData = data;
    })
    .finally( () => {
      renderProducts( fetchData, productsContainer );

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
  productEl.classList.add('products__product-card')
  productEl.innerHTML = /* html */`
    <a href="./pages/product-detail-view.html">
      <span class="product-card__price-tag">${product.price}€</span><button class="product-card__add-to-cart-btn"><i>+</i></button>
      <figure class="product-card__image"><img src=${product.image_url} alt="${product.name}"></figure>
      <div class="product-card__info">
        <h4 class="product-card__name">${product.name}</h4>
        <span class="product-card__category">${product.flavor}</span>
      </div>
    </a>
  `;
  return productEl;
}