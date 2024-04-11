
import { ProductDashboardComponent } from '../dashboard/ProductDashboardComponent.js';
import { ProductSearchComponent } from './ProductSearchComponent.js'

export function SearchResultsProductsComponent( productType, arrayProducts ){

  const productsResultsSectionEl = document.createElement('section');
  productsResultsSectionEl.classList.add('results__products');

  console.log( arrayProducts );
  
  let productEl;
  arrayProducts.forEach( ( product ) => {

    if( productType == 'dashboard' ){
      productEl = ProductDashboardComponent( product );
    } else if( productType == 'search' ){
      productEl = ProductSearchComponent( product );
    }

    productsResultsSectionEl.appendChild( productEl );
  });

  return productsResultsSectionEl;
}