// Task 2: Basic CRUD Operations
db = db.getSiblingDB("plp_bookstore");

// Find all books in a genre
db.books.find({ genre: "Fiction" });

// Find books after year
db.books.find({ published_year: { $gt: 1950 } });

// Find by author
db.books.find({ author: "George Orwell" });

// Update price
db.books.updateOne(
    { title: "1984" },
    { $set: { price: 11.99 } }
);

// Delete by title
db.books.deleteOne({ title: "The Great Gatsby" });