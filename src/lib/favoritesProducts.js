export async function favoritesProducts( ){

  const mainEl = document.querySelector('main');

  const favoritesSection = document.createElement('section');
  favoritesSection.classList.add('favorites-products');

  const titleSection = document.createElement('h3');
  titleSection.classList.add('title-section', 'padding-wrap');
  titleSection.textContent = 'Our Favorites';

  const favoritesContainer = document.createElement('div');
  favoritesContainer.classList.add('favorites-products__container');

  favoritesSection.appendChild(titleSection);

  const ourFavoriteProducts = await getOurFavoriteProducts();
  renderOurFavoritesProducts( ourFavoriteProducts, favoritesContainer );


  favoritesSection.appendChild(favoritesContainer);
  document.body.insertBefore(favoritesSection, mainEl);

}


async function getOurFavoriteProducts(){

  const endpoint = 'https://miyum-service.onrender.com/products?our_favorite=true';
  const request = await fetch( endpoint );
  const response = await request.json();

  return response;

}


function renderOurFavoritesProducts( data, productsContainer ){
  data.forEach( ( product ) => {
    const productEl = renderFavoriteProduct( product );
    productsContainer.appendChild( productEl );
  });
}


function renderFavoriteProduct( product ){

  const productEl = document.createElement('article');
  productEl.dataset.id = product.id;
  productEl.classList.add('favorites-products__item');

  productEl.innerHTML = /* html */`
    <img src=${product.image_url} alt=${product.name} class="item__image" data-id=${product.id} />
    <div class="item__details" data-id=${product.id}>
      <p class="details__title" data-id=${product.id}>${product.name}</p>
      <span class="details__flavor" data-id=${product.id}>${product.flavor}</span>
    </div>
  `;


  productEl.addEventListener('click', e => {

    const productDetailViewRoute = './pages/product-detail-view.html';

    if( e.target.dataset.id ){
      localStorage.setItem('product-selected', e.target.dataset.id);
    }

    window.location.href = productDetailViewRoute;

  });


  return productEl;

}