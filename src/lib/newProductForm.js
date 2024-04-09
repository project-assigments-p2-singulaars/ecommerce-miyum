

export function newProductForm( ){

  const newProductFormEl = document.querySelector('form');
  newProductFormEl.classList.add('new-product');
  newProductFormEl.method = 'post';

  newProductFormEl.innerHTML = /* html */`
    <label for="product-name">Product Name</label>
    <input type="text" name="name" id="product-name" required>

    <label for="product-description">Description</label>
    <textarea name="description" id="product-description" cols="30" rows="10" required></textarea>

    <label for="product-category">Category</label>
    <select name="category" id="product-category" required>
      <option value="cakes">Cakes</option>
      <option value="pastries">Pastries</option>
      <option value="cookies">Cookies</option>
      <option value="donuts">Donuts</option>
      <option value="breads">Breads</option>
    </select>

    <label for="product-flavor">Flavor</label>
    <input type="text" name="flavor" id="product-flavor">

    <label for="product-price">Price</label>
    <input type="text" name="price" id="product-price">

    <div class="diet-field">
      <label for="product-special-diets">Special Diets</label>
      <div class="diet-field__tags">
        <span class="tags__tag" data-diet="gluten-free">Gluten-Free</span>
        <span class="tags__tag" data-diet="vegan">Vegan</span>
        <span class="tags__tag" data-diet="vegetarian">Vegetarian</span>
      </div>
      <select name="special-diets" id="product-special-diets">
        <option value="gluten-free">Gluten-Free</option>
        <option value="lactose-free">Lactose-Free</option>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="sugar-free">Sugar-Free</option>
      </select>
    </div>

    <label for="product-image">Change Product Image</label>
    <input type="file" name="image" id="product-image">
    <img src="" alt="new product image" >

    <input type="submit" value="Save Changes">
  `;

  document.querySelector('main').appendChild( newProductFormEl );
}

// function getInputData( selector ){

//   document.querySelector()
// }