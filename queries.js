// plp_bookstore database queries

db.books.find().pretty()

db.books.find()
db.books.countDocuments()

db.books.findOne({title: "1984"})
db.books.find({author: "George Orwell"})

db.books.find({genre: "Fiction"})
db.books.find({genre: "Fantasy"})

db.books.find({in_stock: true})
db.books.find({in_stock: false})

db.books.find({price: {$lt: 10}})
db.books.find({price: {$gte: 10, $lte: 15}})
db.books.find().sort({price: 1})

db.books.find({published_year: {$gt: 1950}})
db.books.find({published_year: {$lt: 1900}})

db.books.find({}, {title: 1, author: 1, _id: 0})
db.books.find({genre: "Fiction"}, {title: 1, price: 1})

db.books.find().sort({title: 1})
db.books.find().sort({published_year: -1})
db.books.find().sort({price: -1}).limit(3)

db.books.find({author: {$in: ["George Orwell", "J.R.R. Tolkien"]}})

db.books.find({pages: {$gt: 300}})

db.books.find({title: {$regex: /the/i}})

db.books.find().limit(5)
db.books.find().skip(5).limit(3)

db.books.insertOne({
    title: "Test Book", 
    author: "Me", 
    genre: "Testing",
    published_year: 2024,
    price: 20.00,
    in_stock: true,
    pages: 100,
    publisher: "Self Published"
})

db.books.updateOne({title: "1984"}, {$set: {price: 12.99}})

db.books.updateMany({genre: "Fiction"}, {$set: {rating: 4.5}})

db.books.updateMany({}, {$inc: {price: 1}})

db.books.updateMany({in_stock: false}, {$set: {in_stock: true}})

db.books.deleteOne({title: "Test Book"})

db.books.aggregate([
    {$group: {_id: "$genre", total: {$sum: 1}}}
])

db.books.aggregate([
    {$group: {_id: "$genre", avg_price: {$avg: "$price"}}}
])

db.books.aggregate([
    {$group: {_id: "$genre", max_price: {$max: "$price"}, book_count: {$sum: 1}}}
])
