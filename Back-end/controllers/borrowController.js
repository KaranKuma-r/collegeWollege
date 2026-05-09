const mongoose = require("mongoose");

const Borrow = require("../models/Borrow");

const Book = require("../models/Book");

const Payment = require("../models/Payment");

const calculateCost = require("../utils/calculateCost");


// Validate Borrow
const validateBorrow = async (req,res) => {

  try{

    const { bookId,days } = req.body;


    // Empty Validation
    if(!bookId || !days){

      return res.status(400).json({
        message:"All fields required"
      });

    }


    // Negative Days Validation
    if(days <= 0){

      return res.status(400).json({
        message:"Days must be greater than 0"
      });

    }


    // Max Days Validation
    if(days > 7){

      return res.status(400).json({
        message:"Maximum 7 days allowed"
      });

    }


    // Invalid ID Validation
    if(

      !mongoose.Types.ObjectId.isValid(
        bookId
      )

    ){

      return res.status(400).json({
        message:"Invalid Book ID"
      });

    }


    const book =
      await Book.findById(bookId);


    if(!book){

      return res.status(404).json({
        message:"Book not found"
      });

    }


    if(!book.isAvailable){

      return res.status(400).json({
        message:"Book unavailable"
      });

    }


    const activeBorrow =
      await Borrow.findOne({

        user:req.user._id,

        status:"Active"

      });


    if(activeBorrow){

      return res.status(400).json({
        message:"Only one active borrow allowed"
      });

    }


    const pendingPayment =
      await Payment.findOne({

        user:req.user._id,

        paymentStatus:"Pending"

      });


    if(pendingPayment){

      return res.status(400).json({
        message:"Clear pending payment first"
      });

    }


    res.json({
      message:"Borrow Allowed"
    });

  }
  catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};


// Calculate Borrow
const calculateBorrow = async (req,res) => {

  try{

    const { bookId,days } = req.body;


    if(!bookId || !days){

      return res.status(400).json({
        message:"All fields required"
      });

    }


    if(days <= 0){

      return res.status(400).json({
        message:"Days must be greater than 0"
      });

    }


    if(

      !mongoose.Types.ObjectId.isValid(
        bookId
      )

    ){

      return res.status(400).json({
        message:"Invalid Book ID"
      });

    }


    const book =
      await Book.findById(bookId);


    if(!book){

      return res.status(404).json({
        message:"Book not found"
      });

    }


    const totalCost =
      calculateCost(
        book.pricePerDay,
        days
      );


    res.json({
      totalCost
    });

  }
  catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};


// Borrow Book
const borrowBook = async (req,res) => {

  try{

    const { bookId,days } = req.body;


    if(!bookId || !days){

      return res.status(400).json({
        message:"All fields required"
      });

    }


    if(days <= 0){

      return res.status(400).json({
        message:"Days must be greater than 0"
      });

    }


    if(days > 7){

      return res.status(400).json({
        message:"Maximum 7 days allowed"
      });

    }


    if(

      !mongoose.Types.ObjectId.isValid(
        bookId
      )

    ){

      return res.status(400).json({
        message:"Invalid Book ID"
      });

    }


    const book =
      await Book.findById(bookId);


    if(!book){

      return res.status(404).json({
        message:"Book not found"
      });

    }


    if(!book.isAvailable){

      return res.status(400).json({
        message:"Book already borrowed"
      });

    }


    const existingBorrow =
      await Borrow.findOne({

        user:req.user._id,

        status:"Active"

      });


    if(existingBorrow){

      return res.status(400).json({
        message:"You already borrowed a book"
      });

    }


    const pendingPayment =
      await Payment.findOne({

        user:req.user._id,

        paymentStatus:"Pending"

      });


    if(pendingPayment){

      return res.status(400).json({
        message:"Clear pending payment first"
      });

    }


    const totalCost =
      calculateCost(
        book.pricePerDay,
        days
      );


    const borrowDate = new Date();

    const dueDate = new Date();

    dueDate.setDate(
      dueDate.getDate() + days
    );


    const borrow =
      await Borrow.create({

        user:req.user._id,

        book:book._id,

        borrowDate,

        dueDate,

        totalCost

      });


    book.isAvailable = false;

    await book.save();


    await Payment.create({

      user:req.user._id,

      borrow:borrow._id,

      amount:totalCost

    });


    res.status(201).json({

      message:"Book Borrowed",

      borrow

    });

  }
  catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};


// Active Borrows
const activeBorrows = async (req,res) => {

  try{

    const borrows =
      await Borrow.find({

        user:req.user._id,

        status:"Active"

      }).populate("book");


    res.json(borrows);

  }
  catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};


// Borrow Summary
const borrowSummary = async (req,res) => {

  try{

    if(

      !mongoose.Types.ObjectId.isValid(
        req.params.borrowId
      )

    ){

      return res.status(400).json({
        message:"Invalid ID"
      });

    }


    const borrow =
      await Borrow.findById(
        req.params.borrowId
      ).populate("book");


    if(!borrow){

      return res.status(404).json({
        message:"Borrow not found"
      });

    }


    res.json(borrow);

  }
  catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};


// Return Book
const returnBook = async (req,res) => {

  try{

    if(

      !mongoose.Types.ObjectId.isValid(
        req.params.borrowId
      )

    ){

      return res.status(400).json({
        message:"Invalid ID"
      });

    }


    const borrow =
      await Borrow.findById(
        req.params.borrowId
      ).populate("book");


    if(!borrow){

      return res.status(404).json({
        message:"Borrow not found"
      });

    }


    const returnDate = new Date();

    borrow.status = "Returned";

    borrow.returnDate = returnDate;


    const dueDate =
      new Date(borrow.dueDate);


    const overdueDays = Math.max(

      0,

      Math.ceil(

        (returnDate - dueDate)

        /

        (1000 * 60 * 60 * 24)

      )

    );


    let overdueAmount = 0;


    if(overdueDays > 0){

      overdueAmount =

        overdueDays *

        borrow.book.duePerDay;

    }


    borrow.overdueCost =
      overdueAmount;


    const finalAmount =

      borrow.totalCost +

      overdueAmount;


    const payment =
      await Payment.findOne({

        borrow:borrow._id

      });


    payment.amount = finalAmount;

    await payment.save();


    borrow.book.isAvailable = true;

    await borrow.book.save();


    await borrow.save();


    res.json({

      message:"Book Returned",

      overdueAmount,

      finalAmount

    });

  }
  catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};


// Borrow History
const borrowHistory = async (req,res) => {

  try{

    const history =
      await Borrow.find({

        user:req.user._id

      }).populate("book");


    res.json(history);

  }
  catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};


module.exports = {

  validateBorrow,

  calculateBorrow,

  borrowBook,

  activeBorrows,

  borrowSummary,

  returnBook,

  borrowHistory

};