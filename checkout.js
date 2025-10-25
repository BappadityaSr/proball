// Get product details from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('product') || 'Professional Series';
const productPrice = urlParams.get('price') || '$89.99';
const productImage = urlParams.get('image') || 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop';

// Update product details on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('product-name').textContent = productName;
    document.getElementById('product-price').textContent = productPrice;
    document.getElementById('product-image').src = productImage;
    document.getElementById('subtotal').textContent = productPrice;
    
    // Calculate total
    const price = parseFloat(productPrice.replace('$', ''));
    const shipping = 9.99;
    const total = price + shipping;
    document.getElementById('final-total').textContent = `$${total.toFixed(2)}`;
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Form submission
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your purchase! Your order has been placed successfully.');
    window.location.href = 'index.html';
});