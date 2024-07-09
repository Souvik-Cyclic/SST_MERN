const express = require("express");
const router = require("express").Router();
const productControllers = require("../controllers/productControllers");

// post
router.post("/api/products", productControllers.createProduct);

// get
router.get("/api/products", productControllers.getAllProducts);

// get product by id
router.get("/api/products/:id", productControllers.getById);

// update product
router.put("/api/products/:id", productControllers.updateProduct);

// delete
router.delete("/api/products/:id", productControllers.deleteProduct);
