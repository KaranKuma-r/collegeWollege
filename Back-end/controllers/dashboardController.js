const Borrow = require("../models/Borrow");

const Payment = require("../models/Payment");


const dashboardSummary = async (req,res) => {

  try{

    const activeBorrows =
      await Borrow.countDocuments({

        user:req.user._id,

        status:"Active"

      });

    const historyCount =
      await Borrow.countDocuments({
        user:req.user._id
      });

    const payments =
      await Payment.find({
        user:req.user._id
      });

    const totalAmount =
      payments.reduce(

        (acc,item)=>
          acc + item.amount,

        0

      );

    const pendingPayments =
      payments.filter(

        (item)=>
          item.paymentStatus === "Pending"

      );

    const balance =
      pendingPayments.reduce(

        (acc,item)=>
          acc + item.amount,

        0

      );

    res.json({

      activeBorrows,

      historyCount,

      totalAmount,

      balance

    });

  }
  catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};

module.exports = {
  dashboardSummary
};