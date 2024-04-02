
export function productsComponent( array ){

  const main = document.querySelector('main');

  const productsComponent = document.createElement('section');
  productsComponent.classList.add('products-component');

  const categoryNavBar = document.createElement('nav');
  categoryNavBar.classList.add('categories-nav', 'padding-wrap');
  categoryNavBar.innerHTML = /* html */`
    <ul class="categories-nav__categories-tabs">
      <li class="categories-tabs__tab-item" id="tab-category-pastries"><i class="tab-item__icon icon-croissant"></i><span class="tab-item__text">Pastries</span></li>
      <li class="categories-tabs__tab-item" id="tab-category-cookies"><i class="tab-item__icon icon-cookie"></i><span class="tab-item__text">Cookies</span></li>
      <li class="categories-tabs__tab-item active" id="tab-category-cakes"><i class="tab-item__icon icon-cake" ></i><span class="tab-item__text">Cakes</span></li>
      <li class="categories-tabs__tab-item" id="tab-category-donuts"><i class="tab-item__icon icon-donut"></i><span class="tab-item__text">Donuts</span></li>
      <li class="categories-tabs__tab-item" id="tab-category-breads"><i class="tab-item__icon icon-bread"></i><span class="tab-item__text">Breads</span></li>
    </ul>
  `;

  const productsSection = document.createElement('section');
  productsSection.classList.add('products');
  
  const productsContainer = document.createElement('div');
  productsContainer.classList.add('products__container', 'padding-wrap');


  const categoryTitle = document.createElement('h3');
  categoryTitle.textContent = 'Cake Slices';
  categoryTitle.classList.add('products__title', 'padding-wrap');



  /* Append Elements */

  productsSection.appendChild(categoryTitle);

  array.forEach( ( product ) => {
    const productEl = renderProductElement( product );
    productsContainer.appendChild( productEl );
  } );

  productsSection.appendChild(productsContainer);

  productsComponent.appendChild( categoryNavBar );
  productsComponent.appendChild( productsSection );

  main.appendChild(productsComponent);


  function renderProductElement( productData ){

    const productEl = document.createElement('article');
    productEl.classList.add('products__product-card');
    
    productEl.innerHTML = /* html */`
      <a href="./pages/product-detail-view.html">
        <span class="product-card__price-tag">${ productData.price }€</span><button class="product-card__add-to-cart-btn"><i>+</i></button>
        <figure class="product-card__image"><img src=${ productData.image } alt=""></figure>
        <div class="product-card__info">
          <h4 class="product-card__name">${ productData.name }</h4>
          <span class="product-card__category">${ productData.type }</span>
        </div>
      </a>
    `;
    
    return productEl;

  }


}