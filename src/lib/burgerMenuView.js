import { toggleMenu, } from "./bottomNavBar.js";

export function burgerMenuView(  ) {

  const body = document.querySelector('body');

  const burgerMenuEl = document.createElement('div');
  burgerMenuEl.classList.add('burger-menu-view');


  burgerMenuEl.innerHTML = /* html */`
    <button id="close" class="burger-menu-view__close-btn close-btn margin-wrap"><i class="fa-solid fa-xmark"></i></button>
    <div class="search-field">
      <input type="text" name="search" class="search-field__input" placeholder="Look for your Yum..."/>
    </div>
    <nav class="burger-menu-view__burger-menu">
      <ul class="burger-menu__list">
        <li class="list__nav-item"><a href="#"><i class="nav-item__icon fa-solid fa-house"></i><span>Home</span><i class="nav-item__icon-right fa-solid fa-angle-right"></i></a></li>
        <li class="list__nav-item"><a href="#"><i class="nav-item__icon fa-solid fa-cookie"></i><span>Products</span><i class="nav-item__icon-right fa-solid fa-angle-right"></i></a></li>
        <li class="list__nav-item"><a href="#"><i class="nav-item__icon fa-solid fa-seedling"></i><span>About</span><i class="nav-item__icon-right fa-solid fa-angle-right"></i></a></li>
        <li class="list__nav-item"><a href="#"><i class="nav-item__icon fa-regular fa-envelope"></i><span>Contact</span><i class="nav-item__icon-right fa-solid fa-angle-right"></i></a></li>
      </ul>
    </nav>
    <div class="social-icons padding-wrap">
      <a href="#"><i class="social-icons__icon fa-brands fa-instagram"></i></a>
      <a href="#"><i class="social-icons__icon fa-brands fa-x-twitter"></i></a>
      <a href="#"><i class="social-icons__icon fa-brands fa-tiktok"></i></a>
      <a href="#"><i class="social-icons__icon fa-brands fa-whatsapp"></i></a>
    </div>
  `;

  body.appendChild(burgerMenuEl);

  const addCloseEvent = () => {
    const closeButton = document.getElementById("close");
    if (closeButton) { 
        closeButton.addEventListener("click", () => {
            toggleMenu();
        });
    }
  };
  
  
  addCloseEvent();

 
}