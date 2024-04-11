
export function SearchBarComponent( typeView ) {

  const searchBar = document.createElement('nav');
  searchBar.classList.add('search__top-nav', 'padding-wrap');

  const searchFieldContainer = document.createElement('div');
  searchFieldContainer.classList.add('top-nav__search');
  searchBar.appendChild( searchFieldContainer );

  const inputEl = document.createElement('input');
  inputEl.classList.add('search__search-field');
  inputEl.id = 'search__search-field';
  inputEl.type = 'text';
  inputEl.name = 'search';
  inputEl.placeholder = 'Search for your Yum...';
  searchFieldContainer.appendChild( inputEl );

  const searchIcon = document.createElement('i');
  searchIcon.classList.add('fa-solid', 'fa-magnifying-glass');
  searchFieldContainer.appendChild( searchIcon );

  if( typeView == 'search' ){

    /* Image Logo */
    const linkImageEl = document.createElement('a');
    linkImageEl.classList.add('top-nav__image');
    linkImageEl.href = '/src/index.html';
    linkImageEl.target = '_blank';

    const imageLogoEl = document.createElement('img');
    imageLogoEl.src = '/src/static/images/logoMiYum.png';
    imageLogoEl.alt = 'logo MiYum';
    linkImageEl.appendChild( imageLogoEl );

    searchBar.insertBefore( imageLogoEl, searchFieldContainer );
    
    
    /* Close Button */
    const closeModalBtn = document.createElement('i');
    closeModalBtn.id = 'close-search-modal-btn';
    closeModalBtn.classList.add('fa-solid', 'fa-x');

    searchBar.appendChild( closeModalBtn );
  }

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
