// List of products with details like name, price, image, author, review, and star rating
const products = [
    {
        id: 1,
        name: "The Great Gatsby",
        price: 9.99,
        image: "images/book1.jpg",
        author: "F. Scott Fitzgerald",
        review: "A timeless classic! The narration brought the Jazz Age to life.",
        stars: "★★★★★"
    },
    {
        id: 2,
        name: "1984",
        price: 8.99,
        image: "images/book2.jpg",
        author: "George Orwell",
        review: "Chilling and thought-provoking. Perfect narrator for this dystopia.",
        stars: "★★★★☆"
    },
    {
        id: 3,
        name: "To Kill a Mockingbird",
        price: 7.99,
        image: "images/book3.jpg",
        author: "Harper Lee",
        review: "The southern accents made this story feel authentic and immersive.",
        stars: "★★★★★"
    },
    {
        id: 4,
        name: "Pride and Prejudice",
        price: 6.99,
        image: "images/book4.jpg",
        author: "Jane Austen",
        review: "Delightful performance full of wit and charm.",
        stars: "★★★★★"
    },
    {
        id: 5,
        name: "The Hobbit",
        price: 10.99,
        image: "images/book5.jpg",
        author: "J.R.R. Tolkien",
        review: "Magical journey with excellent character voices.",
        stars: "★★★★☆"
    },
    {
        id: 6,
        name: "The Catcher in the Rye",
        price: 7.49,
        image: "images/book6.jpg",
        author: "J.D. Salinger",
        review: "Narrator perfectly captured Holden's unique voice.",
        stars: "★★★★★"
    }
];

// Grab the container for our product grid
const productGrid = document.getElementById("product-grid");

// Only add products if we're on the home page
// Need this check so we don't try adding products on other pages
if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    // Loop through each product and create cards for them
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
        // Add the product card to our grid
        productGrid && productGrid.appendChild(productElement);
    });
}

// Data for our customer reviews carousel
const reviews = [
    {
        name: "Emma W.",
        quote: "Online Audiobooks has an amazing selection of audiobooks. The audio quality is fantastic, and the prices are reasonable.",
        image: "reviewImages/emma.jpg"
    },
    {
        name: "John P.",
        quote: "I love how easy it is to find and purchase audiobooks. The website is user-friendly, and the customer support is excellent.",
        image: "reviewImages/john.jpg"
    },
    {
        name: "Sophie M.",
        quote: "The variety of genres and authors available is impressive. I've discovered so many great books through Online Audiobooks.",
        image: "reviewImages/sophie.jpg"
    }
];

// This function builds our review carousel section
function createReviewCarousel() {
    // Only create the carousel on homepage
    if (!window.location.pathname.endsWith("index.html") && window.location.pathname !== "/") {
        return;
    }

    console.log("Creating Review Carousel");

    // Make the container for our carousel
    const carouselContainer = document.createElement('section');
    carouselContainer.classList.add('narrator-carousel');
    
    // Build the HTML structure with all our reviews
    carouselContainer.innerHTML = `
        <h2>What Our Customers Say</h2>
        <div class="carousel-wrapper">
            ${reviews.map((review, index) => `
                <div class="carousel-item ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <div class="narrator-profile">
                        <img src="${review.image}" alt="${review.name}">
                        <div class="narrator-details">
                            <h3>${review.name}</h3>
                            <blockquote class="narrator-quote">${review.quote}</blockquote>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="carousel-controls">
            <button class="prev-btn">&#10094;</button>
            <button class="next-btn">&#10095;</button>
        </div>
    `;

    // Put the carousel after the featured products section
    const featuredProductsSection = document.querySelector('.featured-products');
    if (!featuredProductsSection) {
        console.error("Featured Products Section not found!");
        return;
    }
    featuredProductsSection.insertAdjacentElement('afterend', carouselContainer);

    // Get the items and buttons so we can make the carousel work
    const carouselItems = carouselContainer.querySelectorAll('.carousel-item');
    const prevBtn = carouselContainer.querySelector('.prev-btn');
    const nextBtn = carouselContainer.querySelector('.next-btn');
    let currentIndex = 0;

    // Show/hide reviews based on which one is active
    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            item.style.display = index === currentIndex ? 'block' : 'none';
        });
    }

    // Go to next review when clicked
    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    // Go to previous review when clicked
    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    // Make the buttons work
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Start by showing the first review
    updateCarousel();
}

// This adds sale items to the sales page
function createSeasonalSales() {
    // Only create seasonal sales on sales page
    if (!window.location.pathname.includes('sales.html')) {
        return;
    }

    // These are our discounted books for the sale
    const sale = [
        {
            id: 201,
            name: "Circe",
            price: 5.49,
            image: "salesImages/Circe.jpg",
            author: "Madeline Miller",
            review: "A mesmerizing retelling of Greek mythology. The narration is enchanting!",
            stars: "★★★★★"
        },
        {
            id: 202,
            name: "The Night Circus",
            price: 6.99,
            image: "salesImages/night-circus.jpg",
            author: "Erin Morgenstern",
            review: "A magical and mysterious story brought to life with vivid narration.",
            stars: "★★★★★"
        },
        {
            id: 203,
            name: "Project Hail Mary",
            price: 7.49,
            image: "salesImages/project-hail-mary.jpg",
            author: "Andy Weir",
            review: "A gripping space adventure with an outstanding performance by the narrator.",
            stars: "★★★★☆"
        },
        {
            id: 204,
            name: "The Song of Achilles",
            price: 5.99,
            image: "salesImages/song-of-achilles.jpg",
            author: "Madeline Miller",
            review: "Heart-wrenching and beautifully narrated. A must-listen!",
            stars: "★★★★★"
        }
    ];

    // Find the grid where we'll put our sale items
    const salesGrid = document.getElementById('seasonal-sales-grid');
    if (!salesGrid) {
        console.error('Sales grid not found!');
        return;
    }

    // Add each sale book to the grid
    sale.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('product');
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.name}">
            <div class="product-content">
                <div class="product-header">
                    <div class="product-title">
                        <h3>${book.name}</h3>
                        <p class="author">${book.author}</p>
                    </div>
                    <div class="product-review">
                        <div class="stars">${book.stars}</div>
                        <p class="review">"${book.review}"</p>
                    </div>
                </div>
                <div class="product-footer">
                    <p class="price">£${book.price} <span class="discount">(50% Off!)</span></p>
                    <button class="btn">Download</button>
                </div>
            </div>
        `;
        salesGrid.appendChild(bookElement);
    });
}

// Run our functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createReviewCarousel();
    createSeasonalSales();
});

// Make mobile menu work after everything is loaded
window.addEventListener('load', function() {
    // Try to set up the mobile menu if SlickNav is available
    if (typeof $.fn.slicknav === 'function') {
        $('#menu').slicknav({
            prependTo: 'body',
            label: 'MENU',
            brand: '',
            closedSymbol: '☰',
            allowParentLinks: true,
            init: function() {
                console.log('Mobile menu initialized successfully');
            }
        });
    } else {
        console.error('SlickNav plugin not loaded!');
    }
});