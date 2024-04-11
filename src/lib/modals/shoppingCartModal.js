

export function shoppingCartModal( ){

  const shoppingCartModal = document.createElement('aside');
  shoppingCartModal.classList.add('shopping-cart');

  shoppingCartModal.innerHTML = /* html */`
    <h5>Shopping Cart</h5>
    <section class="shopping-cart__category">
      <h6>Cakes</h6>
      <article class="category__product">
        <img class="product__image" src="/src/static/images/image_cake1.png" alt="">
        <div class="product__details">
          <p class="details__name">Chocho Yum</p>
          <p class="details__flavor">Chocolate</p>
        </div>
        <div class="product__counter">
          <button class="counter__minus">-</button>
          <span class="counter__number">1</span>
          <button class="counter__plus">+</button>
        </div>
        <p class="product__price"><span class="price__number">5</span>€</p>
      </article>
      <article class="category__product">
        <img class="product__image" src="/src/static/images/image_cake1.png" alt="">
        <div class="product__details">
          <p class="details__name">Chocho Yum</p>
          <p class="details__flavor">Chocolate</p>
        </div>
        <div class="product__counter">
          <button class="counter__minus">-</button>
          <span class="counter__number">1</span>
          <button class="counter__plus">+</button>
        </div>
        <p class="product__price"><span class="price__number">5</span>€</p>
      </article>
    </section>
    <section class="shopping-cart__category">
      <h6>Cookies</h6>
      <article class="category__product">
        <img class="product__image" src="/src/static/images/image_cake1.png" alt="">
        <div class="product__details">
          <p class="details__name">Chocho Yum</p>
          <p class="details__flavor">Chocolate</p>
        </div>
        <div class="product__counter">
          <button class="counter__minus">-</button>
          <span class="counter__number">1</span>
          <button class="counter__plus">+</button>
        </div>
        <p class="product__price"><span class="price__number">5</span>€</p>
      </article>
      <article class="category__product">
        <img class="product__image" src="/src/static/images/image_cake1.png" alt="">
        <div class="product__details">
          <p class="details__name">Chocho Yum</p>
          <p class="details__flavor">Chocolate</p>
        </div>
        <div class="product__counter">
          <button class="counter__minus">-</button>
          <span class="counter__number">1</span>
          <button class="counter__plus">+</button>
        </div>
        <p class="product__price"><span class="price__number">5</span>€</p>
      </article>
    </section>
    <p class="shopping-cart__total">
      <span class="total__span">Total:</span>
      <span class="total__price"><span class="price__value">25</span>€</span>
    </p>
    <button class="shopping-cart__purchase-btn">PURCHASE</button>
  `;

  const headerEl = document.querySelector('.main-header');

  headerEl.appendChild( shoppingCartModal );


  const shoppingCartBtn = document.querySelector('.main-header .right-buttons__shopping-cart');

  shoppingCartBtn.addEventListener('click', () => {

    shoppingCartModal.classList.toggle('visible');

  });

}