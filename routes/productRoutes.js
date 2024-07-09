const express = require("express");

const router = require("express").Router();
// post
router.post("/api/products", async (req, res) => {
  productModel.create({
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    isInStock: req.body.isInStock,
    category: req.body.category,
  });
  return res.status(201).json({ message: "Product Created" });
});

// get
router.get("/api/products", async (req, res) => {
  const allProducts = await productModel.find({});

  return res.json(allProducts);
});

// get product by id
router.get("/api/products/:id", async (req, res) => {
  const product = await productModel.findById(req.params.id);

  return res.json(product);
});

// update product
router.put("/api/products/:id", async (req, res) => {
  const updatedProduct = await productModel.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  return res.json(updatedProduct);
});

// delete
router.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Product Deleted", deletedProduct });
});
