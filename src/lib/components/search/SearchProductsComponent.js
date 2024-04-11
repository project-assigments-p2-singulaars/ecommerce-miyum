import { FiltersComponent } from "./FiltersComponent.js";
import { fetchProductsData } from "./SearchBarComponent.js";
import { SearchResultsProductsComponent } from "./SearchResultsProductsComponent.js";
import { SearchResultsTopBarComponent } from "./SearchResultsTopBarComponent.js";


export function SearchProductsComponent( viewType = 'search' ){

  /* Array - Products Data */
  const productsData = getProductsDataFromStorage();

  /* Render Init components on load */
  const searchProductsSectionEl = document.createElement( 'section' );
  searchProductsSectionEl.classList.add('dashboard__products');

    /* Aside Filters */

  // const filtersComponent = FiltersComponent();
  // searchProductsSectionEl.appendChild( filtersComponent );

    /* Col Products Results */

  const productsResultsSectionEl = document.createElement( 'section' );
  productsResultsSectionEl.classList.add('products__results');

  const topBarResultsEl = SearchResultsTopBarComponent( productsData.length );
  productsResultsSectionEl.appendChild( topBarResultsEl );

      /* Products Section */

    const productsResultsContainerEl = SearchResultsProductsComponent( viewType, productsData );
    productsResultsSectionEl.appendChild( productsResultsContainerEl );


  searchProductsSectionEl.appendChild( productsResultsSectionEl );



  /* EACH TIME INPUT SEARCH CHANGES */

  window.addEventListener('storageChanged', e => {

    const currentSearchProductsSection = document.querySelector('.products__results');

    /* CLEAN PRODUCTS */

    cleanHTML( currentSearchProductsSection );

    /* RE-RENDER PRODUCTS */

    /* Col Products Results */
  
    const topBarResultsEl = SearchResultsTopBarComponent( getProductsDataFromStorage().length );
    currentSearchProductsSection.appendChild( topBarResultsEl );
  
      /* Products Section */
  
      const productsResultsContainerEl = SearchResultsProductsComponent( viewType, e.detail.productsData );
      currentSearchProductsSection.appendChild( productsResultsContainerEl );

  });


  return searchProductsSectionEl;

}


function cleanHTML( sectionToClean ){

  while( sectionToClean.firstChild ){
    sectionToClean.removeChild( sectionToClean.firstChild );
  }

}

export function getProductsDataFromStorage(){
  
  const storageData = localStorage.getItem('search-results');
  let parsedData = JSON.parse(storageData);

  if( !storageData ){

    const fetchData = fetchProductsData();
    fetchData.then( ( data ) => {
      parsedData = data;
    });
    console.log('nada');

  }

  return parsedData;

}