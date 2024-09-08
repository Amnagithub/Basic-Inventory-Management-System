// create an array of products object with product name quantity and price
const products = ["computer","Monitor","Mouse","Keyboard"];
const quantities = [1,2,3,4];
const prices = [1000,500,200,300];
const productDetails = products.map((product, index) => {
    return {
        name: product,
        quantity: quantities[index],
        price: prices[index]

    }
})
// loop through the array and display the product in the html table.
productDetails.forEach((product) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const quantityCell = document.createElement('td');

})
//add 3 input fields product name, quantity,price and an Add Product button to the table below.use typescript to add the entered product data when the button is clicked.
const productNameInput = document.createElement('input');
const quantityInput = document.createElement('input');
const priceInput = document.createElement('input');
const addButton = document.createElement('button');
addButton.textContent = "Add Product";
addButton.onclick = () => {
    const productName = productNameInput.value;
}

