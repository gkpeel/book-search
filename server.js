const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// DB Stuff
const mongoose = require("mongoose");
const db = require('./models');

// Middleware stuff
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Route Stuff
// Saved Books test route
app.get("/api/books", (req, res) => {
  db.Book
    .find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
