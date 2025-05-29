// Task 3: Advanced Queries
db = db.getSiblingDB("plp_bookstore");

// In stock and published after 2010
db.books.find({ 
    in_stock: true, 
    published_year: { $gt: 2010 } 
});

// Projection (title, author, price only)
db.books.find(
    {},
    { title: 1, author: 1, price: 1, _id: 0 }
);

// Sorting
db.books.find().sort({ price: 1 });  // Ascending
db.books.find().sort({ price: -1 }); // Descending

// Pagination (page 2)
db.books.find().skip(5).limit(5);