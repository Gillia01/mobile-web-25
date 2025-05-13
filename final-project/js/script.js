// Add to cart functionality
let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(event) {
        const productElement = event.target.closest('.product');
        const productName = productElement.querySelector('h3').innerText;
        const productPrice = productElement.querySelector('.price').innerText.replace('$', '');
        const product = { name: productName, price: parseFloat(productPrice) };

        cart.push(product);
        alert(`${productName} has been added to your cart.`);
    });
});
