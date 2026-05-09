const express = require("express");

const router = express.Router();

const {

  getBooks,

  getSingleBook

} = require("../controllers/bookController");


// Get All Books
router.get("/",getBooks);


// Get Single Book
router.get("/:bookId",getSingleBook);

module.exports = router;