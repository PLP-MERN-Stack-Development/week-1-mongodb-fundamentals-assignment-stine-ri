// MongoDB setup commands for Task 1
// Select the database (if running in the mongo shell, use: use plp_bookstore)
// If running as a script, ensure to start the shell with the correct database or use the following:
db = db.getSiblingDB('plp_bookstore');
db.createCollection("books");
print("Database and collection created successfully");