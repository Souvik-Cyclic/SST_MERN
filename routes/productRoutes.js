const express = require("express");
const router = require("express").Router();
const productControllers = require("../controllers/productControllers");

// post
router.post("/", productControllers.createProduct);

// get
router.get("/", productControllers.getAllProducts);

// get product by id
router.get("/:id", productControllers.getById);

// update product
router.put("/:id", productControllers.updateProduct);

// delete
router.delete("/:id", productControllers.deleteProduct);

module.exports = router