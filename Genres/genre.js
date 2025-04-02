//Imports the const from the storage.js
import { fiction, nonFiction, mystery } from './storage.js';

const productGrid = document.getElementById("product-grid");

//Page detection
const currentPage = window.location.pathname.split('/').pop();

let products = [];
if (currentPage === "Fiction.html") {
    products = fiction;
} else if (currentPage === "Non-Fiction.html") {
    products = nonFiction;

} else if (currentPage === "Mystery-Thriller.html") 
    products = mystery;


// Render the products by creating div boxes
products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-content">
            <div class="product-header">
                <div class="product-title">
                    <h3>${product.name}</h3>
                    <p class="author">${product.author}</p>
                </div>
                <div class="product-review">
                    <div class="stars">${product.stars}</div>
                    <p class="review">"${product.review}"</p>
                </div>
            </div>
            <div class="product-footer">
                <p class="price">£${product.price}</p>
                <button class="btn">Download</button>
            </div>
        </div>
    `;
    productGrid.appendChild(productElement);
});