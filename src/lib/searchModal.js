
export function searchModal( ){

  const searchModalEl = document.createElement('aside');
  searchModalEl.classList.add('search-modal', 'results');


  searchModalEl.innerHTML = /* html */`
    <nav class="search-modal__top-nav padding-wrap">
      <a class="top-nav__image" href="/src/index.html" target="_blank" >
        <img src="./static/images/logoMiYum.png" alt="logo MiYum">
      </a>
      <div class="top-nav__search">
        <input id="search__search-field" type="text" name="" class="search__search-field" placeholder="Search for your Yum..." />
        <ul class="search__search-history">
          <span>Last searchs:</span>
          <span class="search-history__tag">Choco Yum</span>
          <span class="search-history__tag">chocolate</span>
          <span class="search-history__tag">vanilla cake</span>
        </ul>
      </div>
      <i id="close-search-modal-btn" class="fa-solid fa-x"></i>
    </nav>
    <section class="search-modal__results padding-wrap">
      <div class="results__top-bar">
        <p><span>14</span> results</p>
        <p>Order by name <i class="fa-solid fa-angle-down"></i></p>
      </div>
      <div class="results__products">
        <article class="products__item">
          <span class="item__price">5€</span>
          <img src="/src/static/images/image_cake1.png" alt="" class="item__image">
          <h4 class="item__title">Chocho Yum</h4>
          <p class="item__flavor">Chocolate</p>
        </article>
        <article class="products__item">
          <span class="item__price">5€</span>
          <img src="/src/static/images/image_cake1.png" alt="" class="item__image">
          <h4 class="item__title">Chocho Yum</h4>
          <p class="item__flavor">Chocolate</p>
        </article>
        <article class="products__item">
          <span class="item__price">5€</span>
          <img src="/src/static/images/image_cake1.png" alt="" class="item__image">
          <h4 class="item__title">Chocho Yum</h4>
          <p class="item__flavor">Chocolate</p>
        </article>
        <article class="products__item">
          <span class="item__price">5€</span>
          <img src="/src/static/images/image_cake1.png" alt="" class="item__image">
          <h4 class="item__title">Chocho Yum</h4>
          <p class="item__flavor">Chocolate</p>
        </article>
        <article class="products__item">
          <span class="item__price">5€</span>
          <img src="/src/static/images/image_cake1.png" alt="" class="item__image">
          <h4 class="item__title">Chocho Yum</h4>
          <p class="item__flavor">Chocolate</p>
        </article>
        <article class="products__item">
          <span class="item__price">5€</span>
          <img src="/src/static/images/image_cake1.png" alt="" class="item__image">
          <h4 class="item__title">Chocho Yum</h4>
          <p class="item__flavor">Chocolate</p>
        </article>
        <article class="products__item">
          <span class="item__price">5€</span>
          <img src="/src/static/images/image_cake1.png" alt="" class="item__image">
          <h4 class="item__title">Chocho Yum</h4>
          <p class="item__flavor">Chocolate</p>
        </article>
        <article class="products__item">
          <span class="item__price">5€</span>
          <img src="/src/static/images/image_cake1.png" alt="" class="item__image">
          <h4 class="item__title">Chocho Yum</h4>
          <p class="item__flavor">Chocolate</p>
        </article>
        <article class="products__item">
          <span class="item__price">5€</span>
          <img src="/src/static/images/image_cake1.png" alt="" class="item__image">
          <h4 class="item__title">Chocho Yum</h4>
          <p class="item__flavor">Chocolate</p>
        </article>
        <article class="products__item">
          <span class="item__price">5€</span>
          <img src="/src/static/images/image_cake1.png" alt="" class="item__image">
          <h4 class="item__title">Chocho Yum</h4>
          <p class="item__flavor">Chocolate</p>
        </article>
      </div>
    </section>
  `;

  document.body.appendChild( searchModalEl );


  const searchIconHeader = document.querySelector('.main-header .right-buttons__search');
  const closeSearchModalBtn = document.querySelector('#close-search-modal-btn');

  searchIconHeader.addEventListener('click', () => {
    searchModalEl.classList.toggle('visible');
  });

  closeSearchModalBtn.addEventListener('click', ( ) => {
    searchModalEl.classList.toggle('visible');
  })

let data;
let search__searchField;


fetch("http://localhost:3000/products")
.then(response => response.json())
.then(dataResponse => {
  data = dataResponse;
})


const searchField = document.getElementById("search__search-field");
  searchField.addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();

    const eventFilter = data.filter (e => {
      eventFilter.forEach (item => {
        console.log(item)
      })
      return e.name.toLowerCase().includes(searchTerm);
    })
  })
}


