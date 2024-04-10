
import { NewProductFormComponent } from "../components/dashboard/NewProductFormComponent.js";
import { HeaderDashboardComponent } from "../components/dashboard/HeaderDashboardComponent.js";

document.addEventListener('DOMContentLoaded', initView);

function initView( ){

  const mainDashboardEl = document.querySelector('main.dashboard');

  const headerEl = HeaderDashboardComponent();
  document.body.insertBefore( headerEl, mainDashboardEl );

  const newProductFormEl = NewProductFormComponent();
  mainDashboardEl.appendChild( newProductFormEl );

}