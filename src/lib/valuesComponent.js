
export function valuesComponent( ){

  const mainEl = document.querySelector('main');

  const valueSection = document.createElement('section');
  valueSection.classList.add('values-section');

  valueSection.innerHTML = /* html */`
    <article class="values-section__item">
      <img src="./static/images/sin-gluten.svg" alt="gluten free">
      <h3>Always Gluten-Free</h3>
      <p>All products are gluten-free</p>
    </article>
    <article class="values-section__item">
      <img src="./static/images/comida-sana.svg" alt="gluten free">
      <h3>Always Fresh</h3>
      <p>We prioritize fresh ingredients</p>
    </article>
    <article class="values-section__item">
      <img src="./static/images/comida-dietetica.svg" alt="gluten free">
      <h3>Always Healthy</h3>
      <p>Promoting healthy habits</p>
    </article>
  `;

  document.body.insertBefore( valueSection, mainEl );

}