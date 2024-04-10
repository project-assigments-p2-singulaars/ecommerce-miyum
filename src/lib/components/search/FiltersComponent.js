

export function FiltersComponent(){

  const filtersEl = document.createElement('aside');
  filtersEl.classList.add('products__filters');

  filtersEl.innerHTML = /* html */`
    <div class="filters__type">
      <h5 class="type__title">Categories</h5>
      <ul class="type__items">
        <li class="items__filter">
          <span class="filter__name">Cake</span><span class="filter__num-products">15</span>
        </li>
        <li class="items__filter">
          <span class="filter__name">Cake</span><span class="filter__num-products">15</span>
        </li>
        <li class="items__filter">
          <span class="filter__name">Cake</span><span class="filter__num-products">15</span>
        </li>
      </ul>
    </div>
  `;

  return filtersEl;

}