// Index creation for Task 5
db = db.getSiblingDB("plp_bookstore");

// Single index on title
db.books.createIndex({ title: 1 });

// Compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

print("Indexes created successfully");