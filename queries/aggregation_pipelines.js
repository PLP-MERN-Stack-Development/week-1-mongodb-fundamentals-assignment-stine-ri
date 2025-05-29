// Task 4: Aggregation Pipelines
db = db.getSiblingDB("plp_bookstore");

// Average price by genre
db.books.aggregate([
    { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// Author with most books
db.books.aggregate([
    { $group: { _id: "$author", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 1 }
]);

// Books by decade
db.books.aggregate([
    { 
        $group: { 
            _id: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] },
            count: { $sum: 1 }
        }
    }
]);