const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  dashboardSummary,
} = require("../controllers/dashboardController");

router.get("/summary", protect, dashboardSummary);

module.exports = router;