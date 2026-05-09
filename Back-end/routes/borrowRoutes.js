const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

  validateBorrow,

  calculateBorrow,

  borrowBook,

  activeBorrows,

  borrowSummary,

  returnBook,

  borrowHistory

} = require("../controllers/borrowController");


// Validate Borrow
router.post(
  "/validate",
  protect,
  validateBorrow
);


// Calculate Borrow
router.post(
  "/calculate",
  protect,
  calculateBorrow
);


// Borrow Book
router.post(
  "/",
  protect,
  borrowBook
);


// Active Borrows
router.get(
  "/active",
  protect,
  activeBorrows
);


// Borrow Summary
router.get(
  "/:borrowId/summary",
  protect,
  borrowSummary
);


// Return Book
router.post(
  "/:borrowId/submit",
  protect,
  returnBook
);


// Borrow History
router.get(
  "/history",
  protect,
  borrowHistory
);

module.exports = router;