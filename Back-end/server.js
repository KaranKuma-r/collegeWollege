require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Smart Library API Running");
});

app.use("/auth", require("./routes/authRoutes"));

app.use("/books", require("./routes/bookRoutes"));

app.use("/borrow", require("./routes/borrowRoutes"));

app.use("/payments", require("./routes/paymentRoutes"));

app.use("/dashboard", require("./routes/dashboardRoutes"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});