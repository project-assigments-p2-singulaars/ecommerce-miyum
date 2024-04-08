import { productsComponent, renderProductElement, renderProducts } from "./productsComponent.js";

export function categorySelector( productsComponentEl ){

  const categoriesNavBar = document.createElement('nav');
  categoriesNavBar.classList.add('categories-nav', 'padding-wrap');
  categoriesNavBar.innerHTML = /* html */`
    <ul class="categories-nav__categories-tabs">
      <li class="categories-tabs__tab-item" id="tab-category-pastries" data-category='pastries'>
        <i class="tab-item__icon icon-croissant"></i>
        <span class="tab-item__text">Pastries</span>
      </li>
      <li class="categories-tabs__tab-item" id="tab-category-cookies" data-category='cookies'>
        <i class="tab-item__icon icon-cookie"></i>
        <span class="tab-item__text">Cookies</span>
      </li>
      <li class="categories-tabs__tab-item active" id="tab-category-cakes" data-category='cakes'>
        <i class="tab-item__icon icon-cake" ></i>
        <span class="tab-item__text">Cakes</span>
      </li>
      <li class="categories-tabs__tab-item" id="tab-category-donuts" data-category='donuts'>
        <i class="tab-item__icon icon-donut"></i>
        <span class="tab-item__text">Donuts</span>
      </li>
      <li class="categories-tabs__tab-item" id="tab-category-breads" data-category='breads'>
        <i class="tab-item__icon icon-bread"></i>
        <span class="tab-item__text">Breads</span>
      </li>
    </ul>
  `;

  /* Append Element */
  productsComponentEl.appendChild( categoriesNavBar );


  /* Events */

  const categoriesListItems = categoriesNavBar.querySelectorAll('li');
  categoriesListItems.forEach( ( listItem ) => {
    listItem.addEventListener( 'click', selectCategory );
  });




  /* Select and fetch products by Category */

  function selectCategory( e ){

    if( e.currentTarget.classList.contains('categories-tabs__tab-item') ){

      const categoryValue = e.currentTarget.dataset['category'];
      const productsContainer = document.querySelector('.products__container');

      cleanHTML( productsContainer );

      const products = fetchProductsByCategory( categoryValue );

      products.then( data => {
        renderProducts( data, productsContainer );
      });

    }

  }

}


function cleanHTML( container ){

  while( container.firstChild ){
    container.removeChild( container.firstChild );
  }

}


async function fetchProductsByCategory( category ){

  try{

    const endpoint = `http://localhost:3000/products?category=${category}`;
    const request = await fetch( endpoint );
    const response = await request.json();

    return response;

  } catch{

  }

}