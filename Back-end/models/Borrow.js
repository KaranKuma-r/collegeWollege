const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },

    borrowDate: Date,

    dueDate: Date,

    returnDate: Date,

    totalCost: Number,

    overdueCost: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["Active", "Returned"],
      default: "Active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Borrow", borrowSchema);