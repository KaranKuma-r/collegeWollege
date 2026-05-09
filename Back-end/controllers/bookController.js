const Book = require("../models/Book");


// Get All Books
const getBooks = async (req,res) => {

  try{

    const books = await Book.find();

    res.json(books);

  }
  catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};


// Get Single Book
const getSingleBook = async (req,res) => {

  try{

    const book =
      await Book.findById(
        req.params.bookId
      );

    if(!book){

      return res.status(404).json({
        message:"Book not found"
      });

    }

    res.json(book);

  }
  catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};


module.exports = {

  getBooks,

  getSingleBook

};