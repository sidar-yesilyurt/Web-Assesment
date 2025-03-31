// List of products with details like name, price, image, author, review, and star rating
const products = [
    {
        id: 1,
        name: "The Great Gatsby",
        price: 9.99,
<<<<<<< HEAD
        image: "images/book1.JPG",
=======
        image: "images/book1.jpg",
>>>>>>> ce1b755 (slick bar)
        author: "F. Scott Fitzgerald",
        review: "A timeless classic! The narration brought the Jazz Age to life.",
        stars: "★★★★★"
    },
    {
        id: 2,
        name: "1984",
        price: 8.99,
<<<<<<< HEAD
        image: "images/book2.JPG",
=======
        image: "images/book2.jpg",
>>>>>>> ce1b755 (slick bar)
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

// Select the product grid container to add product cards
const productGrid = document.getElementById("product-grid");

// Only create product grid if we're on the homepage
if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    // Loop through each product and create its HTML card
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
        productGrid && productGrid.appendChild(productElement);
    });
}

// User reviews data for carousel
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

// Function to create the review carousel
function createReviewCarousel() {
    // Only create carousel on homepage
    if (!window.location.pathname.endsWith("index.html") && window.location.pathname !== "/") {
        return;
    }

    console.log("Creating Review Carousel");

    // Create the carousel section
    const carouselContainer = document.createElement('section');
    carouselContainer.classList.add('narrator-carousel');
    
    // Add HTML for carousel layout with controls
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

    // Place the carousel after the featured products section
    const featuredProductsSection = document.querySelector('.featured-products');
    if (!featuredProductsSection) {
        console.error("Featured Products Section not found!");
        return;
    }
    featuredProductsSection.insertAdjacentElement('afterend', carouselContainer);

    // Select carousel items and buttons
    const carouselItems = carouselContainer.querySelectorAll('.carousel-item');
    const prevBtn = carouselContainer.querySelector('.prev-btn');
    const nextBtn = carouselContainer.querySelector('.next-btn');
    let currentIndex = 0;

    // Update carousel display to show the current item
    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            item.style.display = index === currentIndex ? 'block' : 'none';
        });
    }

    // Navigate to the next review
    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    // Navigate to the previous review
    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    // Add event listeners for carousel controls
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Show the first review initially
    updateCarousel();
}

// Seasonal Sales Data and Functionality
function createSeasonalSales() {
    // Only create seasonal sales on sales page
    if (!window.location.pathname.includes('sales.html')) {
        return;
    }

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

    const salesGrid = document.getElementById('seasonal-sales-grid');
    if (!salesGrid) {
        console.error('Sales grid not found!');
        return;
    }

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

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createReviewCarousel();
    createSeasonalSales();
});

<<<<<<< HEAD
// Initialize SlickNav mobile menu
$(function() {
    $('#menu').slicknav({
        prependTo: 'body',
        label: 'MENU',
        allowParentLinks: true,
        brand: 'Online Audiobooks',
        duplicate: false,
        closedSymbol: '&#9658;',
        openedSymbol: '&#9660;'
    });

    // Smooth scroll for in-page links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 500);
        }
    });
});
=======
// Wait for everything to be fully loaded
window.addEventListener('load', function() {
    // Initialize SlickNav
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
        setupMobileMenuFallback();
    }
});


>>>>>>> ce1b755 (slick bar)
