//Storage the Fictional and Non-Fictional Products and Mystery Genres

const fiction = [
    {
        id: 1,
        name: "The Great Gatsby",
        price: 7.99,
        image: "../images/book1.JPG",
        author: "F. Scott Fitzgerald",
        review: "A timeless classic of the Jazz Age with brilliant narration.",
        stars: "★★★★★"
    },
    {
        id: 2,
        name: "1984",
        price: 6.99,
        image: "../images/book2.JPG",
        author: "George Orwell",
        review: "Chilling dystopian masterpiece with perfect narration.",
        stars: "★★★★★"
    },
    {
        id: 3,
        name: "To Kill a Mockingbird",
        price: 5.99,
        image: "../images/book3.jpg",
        author: "Harper Lee",
        review: "Powerful story brought to life with authentic southern accents.",
        stars: "★★★★☆"
    },
    {
        id: 4,
        name: "Pride and Prejudice",
        price: 5.49,
        image: "../images/book4.jpg",
        author: "Jane Austen",
        review: "Witty and romantic with delightful narration.",
        stars: "★★★★★"
    },
    {
        id: 5,
        name: "The Hobbit",
        price: 8.99,
        image: "../images/book5.jpg",
        author: "J.R.R. Tolkien",
        review: "Magical adventure with excellent character voices.",
        stars: "★★★★☆"
    },
    {
        id: 6,
        name: "The Handmaid's Tale",
        price: 7.49,
        image: "../images/book6.jpg",
        author: "Margaret Atwood",
        review: "Haunting and powerful dystopian fiction.",
        stars: "★★★★★"
    }
];

const nonFiction = [
    {
        id: 7,
        name: "Sapiens: A Brief History of Humankind",
        price: 9.99,
        image: "images/nonfic1.jpg",
        author: "Yuval Noah Harari",
        review: "Fascinating journey through human history.",
        stars: "★★★★★"
    },
    {
        id: 8,
        name: "Becoming",
        price: 8.49,
        image: "images/nonfic2.jpg",
        author: "Michelle Obama",
        review: "Inspirational memoir with warm narration.",
        stars: "★★★★★"
    },
    {
        id: 9,
        name: "Atomic Habits",
        price: 6.99,
        image: "images/nonfic3.jpg",
        author: "James Clear",
        review: "Life-changing advice on building good habits.",
        stars: "★★★★☆"
    },
    {
        id: 10,
        name: "Educated",
        price: 7.99,
        image: "images/nonfic4.jpg",
        author: "Tara Westover",
        review: "Powerful memoir of self-education and resilience.",
        stars: "★★★★★"
    },
    {
        id: 11,
        name: "The Body: A Guide for Occupants",
        price: 8.99,
        image: "images/nonfic5.jpg",
        author: "Bill Bryson",
        review: "Entertaining and informative tour of the human body.",
        stars: "★★★★☆"
    },
    {
        id: 12,
        name: "Quiet: The Power of Introverts",
        price: 6.49,
        image: "images/nonfic6.jpg",
        author: "Susan Cain",
        review: "Eye-opening perspective on introversion.",
        stars: "★★★★★"
    }
];

const mystery = [
    {
        id: 13,
        name: "The Night Circus",
        price: 7.99,
        image: "images/mystery1.jpg",
        author: "John Green",
        review: "A thrilling mystery story with perfect narration.",
        stars: "★★★★★"
    },
    {
        id: 14,
        name: "The Da Vinci Code",
        price: 9.99,
        image: "images/mystery2.jpg",
        author: "Daniel Brown",
        review: "A groundbreaking cryptographic masterpiece.",
        stars: "★★★★★"
    },

    {
        id: 15,
        name: "The Silent Patient",
        price: 6.99,
        image: "images/mystery3.jpg",
        author: "Jane Goodall",
        review: "A heartwarming psychological thriller.",
        stars: "★★★★★"
    },
    {
        id: 16,
        name: "The Help",
        price: 8.99,
        image: "images/mystery4.jpg",
        author: "Kathryn Stockett",
        review: "A powerful and thought-provoking mystery.",
        stars: "★★★★★"
    },
    
    {
        id: 17,
        name: "Gone Girl",
        price: 10.99,
        image: "images/mystery5.jpg",
        author: "Gillian Flynn",
        review: "A psychological thriller with twists at every turn.",
        stars: "★★★★★"
    },
    {
        id: 18,
        name: "The Girl with the Dragon Tattoo",
        price: 11.49,
        image: "images/mystery6.jpg",
        author: "Stieg Larsson",
        review: "A gripping, dark mystery filled with suspense.",
        stars: "★★★★★"
    }


]
    




// Export the data for use in other scripts
export { fiction, nonFiction, mystery };