function cafe(){
    alert("!")
}
// Select the cart count display
const cartCount = document.getElementById('cart-count');

// Select the "Add to Cart" button
const addToCartButton = document.querySelector('.add-to-cart');

// Initialize cart count
let count = 0;

// Add event listener to the button
addToCartButton.addEventListener('click', () => {
  count++;
  cartCount.textContent = count;
  alert('Item added to cart!');
});
