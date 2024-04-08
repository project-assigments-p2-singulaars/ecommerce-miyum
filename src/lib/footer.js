

export function footerSection( ){

  const footerEl = document.createElement('footer');
  footerEl.classList.add('main-footer', 'padding-wrap');

  footerEl.innerHTML = /* html */`
    <div class="main-footer__col1">
      <ul class="col1__list">
        <li class="list__item"><a href="#">Work with Us</a></li>
        <li class="list__item"><a href="#">Contact Us</a></li>
        <li class="list__item"><a href="#">Our Values</a></li>
        <li class="list__item"><a href="#">Press</a></li>
      </ul>
    </div>
    <div class="main-footer__col2">
      <ul class="col2__list">
        <li class="list__item"><a href="#">Shippment</a></li>
        <li class="list__item"><a href="#">Privacy</a></li>
        <li class="list__item"><a href="#">Terms & Conditions</a></li>
        <li class="list__item"><a href="#">Refound</a></li>
      </ul>
    </div>
    <div class="main-footer__col3">
      <ul class="col3__list">
        <li class="list__item"><a href="#"><i class='fa-brands fa-instagram'></i></a></li>
        <li class="list__item"><a href="#"><i class='fa-brands fa-facebook'></i></a></li>
        <li class="list__item"><a href="#"><i class='fa-brands fa-tiktok'></i></a></li>
        <li class="list__item"><a href="#"><i class='fa-brands fa-whatsapp'></i></a></li>
      </ul>
    </div>
    <div class="main-footer__col4">
      <p>MiYum - SL-CIF B67406223<br>
      Carrer Femades, 78, 08907, Barcelona<br>
      Phone:(+34) 653432103</p>
    </div>
  `;

  document.body.appendChild(footerEl);
}