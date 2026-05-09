const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

  paymentHistory,

  markAsPaid

} = require("../controllers/paymentController");


// Payment History
router.get(
  "/history",
  protect,
  paymentHistory
);


// Mark Paid
router.patch(
  "/:paymentId/pay",
  protect,
  markAsPaid
);

module.exports = router;