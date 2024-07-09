const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");

// middleware
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("DB Connection Failed", err);
  });

app.listen(8086, () => {
  console.log("Server started at port 8086");
});

app.use("/api/products", productRoutes);
