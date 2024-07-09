const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Failed", err);
  });

// Product Schema
const ProductSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_price: {
    type: String,
    required: true,
  },
  isInStock: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const productModel = mongoose.model("products", ProductSchema);

// post
app.post("/api/products", async (req, res) => {
  productModel.create({
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    isInStock: req.body.isInStock,
    category: req.body.category,
  });
  return res.status(201).json({ message: "Product Created" });
});

// get
app.get("/api/products", async (req, res) => {
  const allProducts = await productModel.find({})

  return res.json(allProducts);
})

// get product by id
app.get("/api/products/:id", async (req, res) => {
  const product = await productModel.findById(req.params.id);

  return res.json(product);
})

app.listen(8086, () => {
  console.log("Server started at port 8086");
});
