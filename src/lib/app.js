
import { navbar } from "./bottomNavBar.js";
import { burgerMenuView } from './burgerMenuView.js';
import { productsComponent } from './productsComponent.js';
import { headerTopNav } from "./headerTopNav.js";
import { heroStarred } from "./heroStarred.js";
import { valuesComponent } from "./valuesComponent.js";
import { favoritesProducts } from "./favoritesProducts.js";
import { footerSection } from "./footer.js";
import { searchModal } from "./modals/searchModal.js";
import { shoppingCartModal } from "./shoppingCartModal.js";

document.addEventListener('DOMContentLoaded', initApp);

function initApp(){

  headerTopNav();
  heroStarred();
  valuesComponent();
  burgerMenuView();
  favoritesProducts();
  productsComponent();
  navbar();
  footerSection();
  searchModal();
  shoppingCartModal();
  
}

