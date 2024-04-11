import { SearchBarComponent } from "../components/search/SearchBarComponent.js";
import { SearchProductsComponent } from "../components/search/SearchProductsComponent.js";

export function searchModal( ){

  const searchModalEl = document.createElement('aside');
  searchModalEl.classList.add('search-modal', 'results');

  const searchBarEl = SearchBarComponent( 'search' );
  searchModalEl.appendChild( searchBarEl );

  const searchProductsSectionEl = SearchProductsComponent( 'search' );
  searchModalEl.appendChild( searchProductsSectionEl );


  document.body.appendChild( searchModalEl );


  const searchIconHeader = document.querySelector('.main-header .right-buttons__search');
  const closeSearchModalBtn = document.querySelector('#close-search-modal-btn');

  searchIconHeader.addEventListener('click', () => {
    searchModalEl.classList.toggle('visible');
  });

  closeSearchModalBtn.addEventListener('click', ( ) => {
    searchModalEl.classList.toggle('visible');
  })


}