
export function favoritesProducts( ){

  const mainEl = document.querySelector('main');

  const favoritesSection = document.createElement('section');
  favoritesSection.classList.add('favorites-products');

  const titleSection = document.createElement('h3');
  titleSection.classList.add('title-section', 'padding-wrap');
  titleSection.textContent = 'Our Favorites';

  const favoritesContainer = document.createElement('div');
  favoritesContainer.classList.add('favorites-products__container');

  favoritesSection.appendChild(titleSection);


  favoritesContainer.innerHTML = /* html */`
    <article class="favorites-products__item">
      <img src="/src/static/images/image_cake1.png" alt="product" class="item__image" />
      <div class="item__details">
        <p class="details__title">Chocho Yum</p>
        <span class="details__flavor">Chocolate</span>
      </div>
    </article>
    <article class="favorites-products__item">
      <img src="/src/static/images/image_cake1.png" alt="product" class="item__image" />
      <div class="item__details">
        <p class="details__title">Chocho Yum</p>
        <span class="details__flavor">Chocolate</span>
      </div>
    </article>
    <article class="favorites-products__item">
      <img src="/src/static/images/image_cake1.png" alt="product" class="item__image" />
      <div class="item__details">
        <p class="details__title">Chocho Yum</p>
        <span class="details__flavor">Chocolate</span>
      </div>
    </article>
    <article class="favorites-products__item">
      <img src="/src/static/images/image_cake1.png" alt="product" class="item__image" />
      <div class="item__details">
        <p class="details__title">Chocho Yum</p>
        <span class="details__flavor">Chocolate</span>
      </div>
    </article>
    <article class="favorites-products__item">
      <img src="/src/static/images/image_cake1.png" alt="product" class="item__image" />
      <div class="item__details">
        <p class="details__title">Chocho Yum</p>
        <span class="details__flavor">Chocolate</span>
      </div>
    </article>
    <article class="favorites-products__item">
      <img src="/src/static/images/image_cake1.png" alt="product" class="item__image" />
      <div class="item__details">
        <p class="details__title">Chocho Yum</p>
        <span class="details__flavor">Chocolate</span>
      </div>
    </article>
    <article class="favorites-products__item">
      <img src="/src/static/images/image_cake1.png" alt="product" class="item__image" />
      <div class="item__details">
        <p class="details__title">Chocho Yum</p>
        <span class="details__flavor">Chocolate</span>
      </div>
    </article>
    <article class="favorites-products__item">
      <img src="/src/static/images/image_cake1.png" alt="product" class="item__image" />
      <div class="item__details">
        <p class="details__title">Chocho Yum</p>
        <span class="details__flavor">Chocolate</span>
      </div>
    </article>
  `;


  favoritesSection.appendChild(favoritesContainer);





  

  document.body.insertBefore(favoritesSection, mainEl);

}