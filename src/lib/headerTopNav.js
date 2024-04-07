

export function headerTopNav() {
  const body = document.querySelector("body");
  const mainEl = document.querySelector('main');
  const header = document.createElement("header");
  header.classList.add('main-header');
  
  header.innerHTML = /* html */`
    <nav class="main-header__nav">
      <div class="nav__logo">
        <a href="/src/index.html" target="_blank" rel="noopener noreferrer">
          <img src="./static/images/logoMiYum.png" alt="logo MiYum">
          <span class="logo__text">MiYum</span>
        </a>
      </div>
      <ul class="nav__menu">
        <li class="menu__item"><a href="/src/pages/products.html">Products</a></li>
        <li class="menu__item"><a href="/src/pages/aboutus.html">About Us</a></li>
        <li class="menu__item"><a href="/src/pages/contact.html">Contact</a></li>
      </ul>
      <div class="nav__right-buttons">
        <i class="right-buttons__search fa-solid fa-magnifying-glass"></i>
        <i class="right-buttons__shopping-cart fa-solid fa-bag-shopping"></i>
        <i class="right-buttons__profile fa-regular fa-user"></i>
      </div>
    </nav>
  `;
  

  /*  Append Elements  */
  body.insertBefore(header, mainEl);

}