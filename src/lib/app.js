
import { navbar } from "./bottomNavBar.js";
import { burgerMenuView } from './burgerMenuView.js';
import { productsComponent } from './productsComponent.js';
import { headerTopNav } from "./headerTopNav.js";
import { heroStarred } from "./heroStarred.js";
import { valuesComponent } from "./valuesComponent.js";
import { favoritesProducts } from "./favoritesProducts.js";

document.addEventListener('DOMContentLoaded', initApp);

function initApp(){

  const productsData = [
    {
      name: 'Chocho Yum',
      description: 'Chocho is our brand cake, made with love <3',
      price: '5',
      type: 'Chocolate',
      category: 'Cake Slices',
      image: './static/images/image_cake1.png',
    },
    {
      name: 'Chocho Yum',
      description: 'Chocho is our brand cake, made with love <3',
      price: '5',
      type: 'Chocolate',
      category: 'Cake Slices',
      image: './static/images/image_cake1.png',
    },
    {
      name: 'Chocho Yum',
      description: 'Chocho is our brand cake, made with love <3',
      price: '5',
      type: 'Chocolate',
      category: 'Cake Slices',
      image: './static/images/image_cake1.png',
    },
    {
      name: 'Chocho Yum',
      description: 'Chocho is our brand cake, made with love <3',
      price: '5',
      type: 'Chocolate',
      category: 'Cake Slices',
      image: './static/images/image_cake1.png',
    },
    {
      name: 'Chocho Yum',
      description: 'Chocho is our brand cake, made with love <3',
      price: '5',
      type: 'Chocolate',
      category: 'Cake Slices',
      image: './static/images/image_cake1.png',
    },
    {
      name: 'Chocho Yum',
      description: 'Chocho is our brand cake, made with love <3',
      price: '5',
      type: 'Chocolate',
      category: 'Cake Slices',
      image: './static/images/image_cake1.png',
    },
    {
      name: 'Chocho Yum',
      description: 'Chocho is our brand cake, made with love <3',
      price: '5',
      type: 'Chocolate',
      category: 'Cake Slices',
      image: './static/images/image_cake1.png',
    },

  ]

  headerTopNav();
  heroStarred();
  valuesComponent();
  burgerMenuView();
  favoritesProducts();
  productsComponent( productsData );
  navbar();

}