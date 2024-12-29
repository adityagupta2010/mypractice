// List of products (can be fetched from the backend in a real-world app)
const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/300x200' },
  { id: 2, name: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/300x200' },
  { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/300x200' },
  { id: 4, name: 'Product 4', price: 99.99, image: 'https://via.placeholder.com/300x200' },
  { id: 5, name: 'Product 5', price: 59.99, image: 'https://via.placeholder.com/300x200' },
  { id: 6, name: 'Product 6', price: 39.99, image: 'https://via.placeholder.com/300x200' },
];

// Render the product list on the page
const productContainer = document.querySelector('.product-list');
products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price.toFixed(2)}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productContainer.appendChild(productCard);
});

// Handle adding items to the cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingProduct = cart.find(p => p.id === productId);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById('cart-count').textContent = cartCount;
}

// Initialize cart count
updateCartCount();
