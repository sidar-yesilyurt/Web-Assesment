// genre.js
import { fiction, nonFiction } from './storage.js';

const productGrid = document.getElementById("product-grid");

// Determine which data to load based on the current page
let products = [];
if (window.location.pathname.includes("Fiction.html")) {
    products = fiction;
} else if (window.location.pathname.includes("Non-Fiction.html")) {
    products = nonFiction;
}

// Render the products
products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="100" height="200">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <p>${product.author}</p>
        <a href="#" class="btn add-to-cart" data-id="${product.id}">Download</a>
    `;
    productGrid.appendChild(productElement);
});