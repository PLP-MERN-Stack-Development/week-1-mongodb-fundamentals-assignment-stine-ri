const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017/plp_bookstore";
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        const books = client.db().collection("books");
        
        const bookList = [
            {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                genre: "Classic",
                published_year: 1925,
                price: 12.99,
                in_stock: true,
                pages: 180,
                publisher: "Scribner"
            },
            {
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                genre: "Fiction",
                published_year: 1960,
                price: 10.99,
                in_stock: true,
                pages: 281,
                publisher: "J. B. Lippincott & Co."
            },
            // Add 8 more books following the same structure
            {
                title: "1984",
                author: "George Orwell",
                genre: "Dystopian",
                published_year: 1949,
                price: 9.99,
                in_stock: false,
                pages: 328,
                publisher: "Secker & Warburg"
            }
        ];
        
        const result = await books.insertMany(bookList);
        console.log(`${result.insertedCount} books inserted`);
    } finally {
        await client.close();
    }
}

main().catch(console.error);