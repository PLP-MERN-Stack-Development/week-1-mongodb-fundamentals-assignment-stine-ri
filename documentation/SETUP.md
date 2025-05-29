## Setup Guide
1. Run MongoDB server
2. Execute setup:
   
   mongosh scripts/database_setup.js
3. Insert data:
    node scripts/insert_books.js
4. Create indexes:

    mongosh scripts/create_indexes.js