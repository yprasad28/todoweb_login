const express = require("express");

const app = express();

const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
app.use(cors());

app.use(express.json());

app.use("/api",authRoutes);
const PORT = process.env.PORT || 5000;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/TodoWebApp"



mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});

