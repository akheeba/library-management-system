const bookRoutes = require("./routes/bookRoutes");
const dns = require("node:dns");

dns.setServers([
  "1.1.1.1",
  "8.8.8.8"
]);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/books", bookRoutes);
// Test Route
app.get("/", (req, res) => {
  res.send("📚 Library Management System API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});