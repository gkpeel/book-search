const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        title: "The Dead Zone",
        authors: ["Stephen King"],
        description: "A man awakens from a 5-year coma to discover he has powers to see visions of the past, present and future, a power which drives him insane.",
        image: "http://books.google.com/books/content?id=O53jCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=O53jCwAAQBAJ&dq=the+dead+zone&hl=&source=gbs_api"
    },
    {
        title: "Lord of the Flies",
        authors: ["William Golding"],
        description: "The classical study of human nature which depicts the degeneration of a group of schoolboys marooned on a desert island.",
        image: "http://books.google.com/books/content?id=3KRdJZbAN_sC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=3KRdJZbAN_sC&dq=lord+of+the+flies&hl=&source=gbs_api"
    }
];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
