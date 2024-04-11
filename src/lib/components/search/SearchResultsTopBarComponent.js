
export function SearchResultsTopBarComponent( numProducts ){

  const topBarEl = document.createElement('div');
  topBarEl.classList.add('results__top-bar');

  topBarEl.innerHTML = /* html */`
    <p><span class="top-bar__num-results">${numProducts}</span> results</p>
    <p>Order by name <i class="fa-solid fa-angle-down"></i></p>
  `;

  return topBarEl;

}