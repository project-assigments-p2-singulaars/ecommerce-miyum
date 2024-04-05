

export function heroStarred( ){

  const body = document.body;
  const main = document.querySelector('main');

  const heroSection = document.createElement('section');
  heroSection.classList.add('hero-starred');

  heroSection.innerHTML = /* html */ `
    <article class="hero-starred__hero-item">
      <div class="hero-item__filter"></div>
      <img src="./static/images/doughnuts-donuts.webp" alt="" class="hero-item__image-background">
      <div class="hero-item__details">
        <h2 class="details__title">Try our new Donuts.</h2>
        <button class="details__order-now">ORDER NOW</button>
      </div>
    </article>
    <article class="hero-starred__hero-item">
      <div class="hero-item__filter"></div>
      <img src="./static/images/como_hacer_cupcakes_en_el_microondas_39911_orig.jpg" alt="" class="hero-item__image-background">
      <div class="hero-item__details">
        <h2 class="details__title">Chocho Yums!</h2>
        <button class="details__order-now">ORDER NOW</button>
      </div>
    </article>
    <article class="hero-starred__hero-item">
      <div class="hero-item__filter"></div>
      <img src="./static/images/macarons.jpg" alt="" class="hero-item__image-background">
      <div class="hero-item__details">
        <h2 class="details__title">It's summer time!</h2>
        <button class="details__order-now">ORDER NOW</button>
      </div>
    </article>
  `;


  body.insertBefore( heroSection, main );

}

