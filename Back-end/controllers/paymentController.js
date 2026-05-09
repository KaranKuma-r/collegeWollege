const Payment = require("../models/Payment");


// Payment History
const paymentHistory = async (req,res) => {

  try{

    const payments =
      await Payment.find({
        user:req.user._id
      }).populate("borrow");

    res.json(payments);

  }
  catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};


// Mark Payment Paid
const markAsPaid = async (req,res) => {

  try{

    const payment =
      await Payment.findById(
        req.params.paymentId
      );

    if(!payment){

      return res.status(404).json({
        message:"Payment not found"
      });

    }

    payment.paymentStatus = "Paid";

    await payment.save();

    res.json({
      message:"Payment Successful"
    });

  }
  catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};


module.exports = {

  paymentHistory,

  markAsPaid

};