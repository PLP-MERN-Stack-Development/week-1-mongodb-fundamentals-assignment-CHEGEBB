[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19716229&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

## Overview
This repository contains my completed MongoDB fundamentals assignment, demonstrating CRUD operations, advanced queries, aggregation pipelines, and indexing concepts.
## Database Screenshot
![image](https://github.com/user-attachments/assets/fa65e088-1fe6-47d3-88f8-fd4dcfec6c68)

## Database Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB installation
- MongoDB Compass (optional but recommended)

### Database Information
- **Database Name**: `plp_bookstore`
- **Collection Name**: `books`
- **Total Documents**: 12 books

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/week-1-mongodb-fundamentals-assignment-CHEGEBB.git
   cd PLP-MERN-Stack-Development/week-1-mongodb-fundamentals-assignment-CHEGEBB
   ```

2. **Install Dependencies**
   ```bash
   npm install mongodb
   ```

3. **Configure Database Connection**
   - Update the connection URI in `insert_books.js` if using a different MongoDB instance
   - Current URI points to MongoDB Atlas cluster

4. **Populate Database**
   ```bash
   node insert_books.js
   ```

5. **Verify Setup**
   - Open MongoDB Compass
   - Connect to your database
   - Navigate to `plp_bookstore` → `books` collection
   - Verify 12 documents are present

## Assignment Completion

### Files Included
- `insert_books.js` - Script to populate database with sample book data
- `queries.js` - Complete set of MongoDB queries demonstrating all assignment requirements
- `database_screenshot.png` - Screenshot of MongoDB database showing populated collection
- `README.md` - This documentation file

### Assignment Tasks Completed

#### ✅ Basic CRUD Operations
- [x] Insert operations (insertOne, insertMany)
- [x] Read operations (find, findOne)
- [x] Update operations (updateOne, updateMany)
- [x] Delete operations (deleteOne, deleteMany)

#### ✅ Advanced Queries
- [x] Filtering with comparison operators ($gt, $lt, $gte, $lte, $ne)
- [x] Logical operators ($and, $or, $in)
- [x] Regular expressions for text search
- [x] Projection (selecting specific fields)
- [x] Sorting (single and multiple field sorting)
- [x] Limiting and skipping results

#### ✅ Aggregation Pipelines
- [x] Grouping operations ($group)
- [x] Matching and filtering ($match)
- [x] Projection in aggregation ($project)
- [x] Sorting and limiting in pipelines
- [x] Statistical operations (sum, average, min, max)
- [x] Conditional expressions ($cond)

#### ✅ Indexing
- [x] Single field indexes
- [x] Compound indexes
- [x] Text indexes for search
- [x] Index analysis and performance monitoring
- [x] Query explanation and optimization

## Sample Data Structure

Each book document contains:
```json
{
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Genre",
  "published_year": 2023,
  "price": 12.99,
  "in_stock": true,
  "pages": 300,
  "publisher": "Publisher Name"
}
```

## Key Learning Outcomes

1. **Database Design**: Understanding document structure and collections
2. **CRUD Mastery**: Proficient in all basic database operations
3. **Query Optimization**: Using indexes and explain() for performance analysis  
4. **Data Analysis**: Leveraging aggregation pipelines for complex data insights
5. **Real-world Application**: Working with realistic book store data

## Running the Queries

To test the queries in `queries.js`:

1. Open MongoDB Compass
2. Connect to your database
3. Navigate to `plp_bookstore` database
4. Open the MongoDB shell at the bottom
5. Copy and paste queries from `queries.js`
6. Execute them one by one or in groups

## Database Connection Details

**MongoDB Atlas Connection:**
- Cluster: glamour.cjncwua.mongodb.net
- Database: plp_bookstore
- Collection: books

**Security Note**: Connection string contains credentials for demonstration purposes. In production, use environment variables or secure credential management.

## Troubleshooting

### Common Issues:
1. **Connection Error**: Verify your internet connection and MongoDB Atlas credentials
2. **Empty Collection**: Make sure to run `insert_books.js` first
3. **Query Errors**: Ensure you're connected to the correct database (`plp_bookstore`)

### Getting Help:
- MongoDB Documentation: https://docs.mongodb.com/
- MongoDB University: https://university.mongodb.com/
- MongoDB Community Forums: https://developer.mongodb.com/community/forums/



