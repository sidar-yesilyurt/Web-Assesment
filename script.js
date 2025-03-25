// function downloadBook(imageElement) {
//     // Get the image source (URL) and alt text
//     const imageUrl = imageElement.src;
//     const altText = imageElement.alt;
  
//     // Create a link element
//     const link = document.createElement('a');
//     link.href = imageUrl;
  
//     link.download = `${product.author}.jpg`; // Use the alt text as the file name
  
//     // Append the link to the body
//     document.body.appendChild(link);
  
//     // Trigger the download
//     link.click();
  
//     // Remove the link from the document
//     document.body.removeChild(link);
  
//     alert(`Downloading ${altText}.jpg...`);
//   }

  const products = [
    {
        id: 1,
        name: "The Great Gatsby",
        price: 999.99,
        image: "images/book1.JPG",
        author: "By F. Scott Fitzgerald",
        review: "I really liked being able to listen to the audiobook"
    },
    {
        id: 2,
        name: "1984",
        price: 499.99,
        image: "images/book2.JPG",
        author: "By George Orwell",
    },
    {
        id: 3,
        name: "To Kill a Mockingbird",
        price: 129.99,
        image: "images/book3.jpg",
        author: "By Harper Lee",
    },
    {
        id: 3,
        name: "To Kill a Mockingbird",
        price: 129.99,
        image: "images/book3.jpg",
        author: "By Harper Lee",
  },
  {
        id: 3,
        name: "To Kill a Mockingbird",
        price: 129.99,
        image: "images/book3.jpg",
        author: "By Harper Lee",
  
},
{
        id: 3,
        name: "To Kill a Mockingbird",
        price: 129.99,
        image: "images/book3.jpg",
        author: "By Harper Lee",
},
];

const productGrid = document.getElementById("product-grid");

products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="100" height="200">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <p>${product.author}</p>
        <p>${product.review}</p>
        <a href="#" class="btn add-to-cart" data-id="${product.id}">Download</a>
    `;
    productGrid.appendChild(productElement);
});