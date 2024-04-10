import { SearchBarComponent } from "../components/search/SearchBarComponent.js";
import { HeaderDashboardComponent } from "../components/dashboard/HeaderDashboardComponent.js";
import { SearchProductsComponent } from "../components/search/SearchProductsComponent.js";

document.addEventListener('DOMContentLoaded', initView);

function initView( ){
  
  const mainDashboardEl = document.querySelector('main.dashboard');

  const headerEl = HeaderDashboardComponent();
  document.body.insertBefore(headerEl, mainDashboardEl);
  
  const searchBarEl = SearchBarComponent( );
  mainDashboardEl.appendChild( searchBarEl );

  const dashboardProductsSectionEl = SearchProductsComponent( 'dashboard' );
  mainDashboardEl.appendChild(dashboardProductsSectionEl);

}