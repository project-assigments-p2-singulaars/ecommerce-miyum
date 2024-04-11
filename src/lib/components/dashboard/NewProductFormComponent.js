

export function NewProductFormComponent( ){

  const newProductFormEl = document.createElement('form');
  newProductFormEl.classList.add('new-product');

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
      <select name="special_diets" id="product-special-diets">
        <option value="Gluten Free">Gluten-Free</option>
        <option value="Lactose Free">Lactose-Free</option>
        <option value="Vegan">Vegan</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Sugar Free">Sugar-Free</option>
      </select>
    </div>

    <label for="product-image">Change Product Image</label>
    <input type="file" name="image" id="product-image">
    <img src="" alt="new product image" >

    <input type="submit" value="Save Changes">
  `;
// CRUD

  const productUrl = 'http://localhost:3000/products'

  fetch(productUrl)
    .then(response => response.json())
    .then(products => {
      
      const existingIds = products.map(product => product.id);
      const maxId = Math.max(...existingIds);
      console.log(maxId);
  
  newProductFormEl.addEventListener('submit', event  =>{

    event.preventDefault()
    console.log(event.target.special_diets);
    console.log(event.target.special_diets.value);

    const newProductId = maxId + 1;

    const productData = {
        id: newProductId,
        name: event.target.name.value,
        description: event.target.description.value,
        category: event.target.category.value,
        flavor: event.target.flavor.value,
        price: event.target.price.value,
        special_diets: event.target.special_diets.value,
        image_url: event.target.image.value
    }

    fetch(productUrl, {
      method: 'POST',
      headers: {
        'Content-Type':
        'application/json'
        },
        body: JSON.stringify(productData)
        })

    })

  })

  return newProductFormEl;
}