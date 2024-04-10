

export function HeaderDashboardComponent() {

  const header = document.createElement("header");
  header.classList.add('main-header');

  header.innerHTML = /* html */`
    <nav class="main-header__nav">
      <div class="nav__logo">
        <a href="/src/index.html" target="_blank" rel="noopener noreferrer">
          <img src="/src/static/images/logoMiYum.png" alt="logo MiYum">
          <span class="logo__text">MiYum</span>
        </a>
      </div>
      <div class="nav__right-buttons">
        <button class="new-product-button" onclick="window.location.href='/src/pages/new-product-view.html';">new product +</button>
        <i class="right-buttons__search fa-solid fa-magnifying-glass"></i>
        <i class="right-buttons__profile fa-regular fa-user"></i>
      </div>
    </nav>
  `;

  return header;

}