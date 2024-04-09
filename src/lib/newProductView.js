const newProductForm = document.getElementById('newProductForm')
const productUrl = 'http://localhost:3000/products'

newProductForm.addEventListener('submit', event  =>{

event.preventDefault()
console.log(event)

const productData = {
	name: event.target.name.value,
    description: event.target.description.value,
    category: event.target.category.value,
    flavor: event.target.flavor.value,
    price: event.target.price.value,
    special_diets: event.target.special_diets.value,
    image_url: event.target.image_url.value
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