
import { burgerMenuView } from './burgerMenuView.js';
import { productsComponent } from './productsComponent.js';

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

  burgerMenuView();
  productsComponent( productsData );

}
