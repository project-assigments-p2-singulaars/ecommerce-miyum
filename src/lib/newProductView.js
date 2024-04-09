
import { headerDashboard } from "./headerDashboard.js";
import { newProductForm } from "./newProductForm.js";

document.addEventListener('DOMContentLoaded', initView);

function initView( ){

  headerDashboard();
  newProductForm();

}