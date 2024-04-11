
export function SearchBarComponent( ) {

  const searchBar = document.createElement('nav');
  searchBar.classList.add('search__top-nav', 'padding-wrap');

  const searchFieldContainer = document.createElement('div');
  searchFieldContainer.classList.add('top-nav__search');

  searchBar.innerHTML = /* html */`
    <div class="top-nav__search">
      <input id="search__search-field" type="text" name="" class="search__search-field" placeholder="Search for your Yum..." />
      <ul class="search__search-history">
        <span>Last searchs:</span>
        <span class="search-history__tag">Choco Yum</span>
        <span class="search-history__tag">chocolate</span>
        <span class="search-history__tag">vanilla cake</span>
      </ul>
    </div>
  `;

  /* Get all products and set them all on storage when loading the document */
  let productsData;
  fetchProductsData()
    .then( data => {
      productsData = data;
      sendProductsDataToStorage( data );
    }
  );


  searchBar.addEventListener( 'keyup', handleInput );

  function handleInput( e ){

    if( e.target.classList.contains( 'search__search-field' ) ){

      const inputValue = e.target.value;
      const filteredProducts = filterProducts( productsData, inputValue );
      sendProductsDataToStorage( filteredProducts );
      // sendInputValueToStorage( inputValue );

      /* Event to consume data anywhere when storage is changed */
      dispatchStorageEvent( filteredProducts );


      if( ( e.key == 'Backspace' || e.key == 'Delete' ) && e.target.value.trim() == '' ){
        sendProductsDataToStorage( productsData );
        sendInputValueToStorage( e.target.value );

      }

    }


  }

  return searchBar;

}


export async function fetchProductsData(){

  const endpoint = `http://localhost:3000/products`;
  const request = await fetch( endpoint );
  const response = await request.json();

  return response;

}


function filterProducts( products, inputValue ){

  const data = products.filter( product => {
    return product.name.toLowerCase().includes( inputValue.toLowerCase() );
  });

  return data;

}

export function sendProductsDataToStorage( productsData ){

  localStorage.setItem( 'search-results', JSON.stringify( productsData ) );

}

function sendInputValueToStorage( inputValue ){

  sessionStorage.setItem( 'search-input', inputValue );

}

export function dispatchStorageEvent( products ){

  const sendDataByEvent = new CustomEvent('storageChanged', {
    detail: {
      isStorageChanged: true,
      productsData: products
    }
  });
  window.dispatchEvent( sendDataByEvent );
  
}
