

export function ProductDashboardComponent( product ){
  
  const productEl = document.createElement('article');
  productEl.classList.add('products__item');
  productEl.dataset.id = product.id;

  productEl.innerHTML = /* html */`
    <span class="item__price">${product.price}€</span>
    <img src=${product.image_url} alt="" class="item__image">
    <div class="item__details">
      <h4 class="details__title">${product.name}</h4>
      <p class="details__flavor">${product.flavor}</p>
    </div>
    <div class="item__buttons">
      <button class="buttons__edit"><i class="fa-solid fa-pen-to-square"></i></button>
      <button class="buttons__delete"><i class="fa-solid fa-trash"></i></button>
    </div>
  `;

  return productEl;
}