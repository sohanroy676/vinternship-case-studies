"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var products = [
    { id: "1", name: "Bananas", price: 1.5, inStock: true },
    { id: "2", name: "Apples", price: 2.0, inStock: false },
];
// GET all products
router.get("/", function (req, res) {
    res.status(200).json(products);
});
// GET product by ID
router.get("/:id", function (req, res) {
    var product = products.find(function (p) { return p.id === req.params.id; });
    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
});
// POST new product
router.post("/", function (req, res) {
    var _a = req.body, name = _a.name, price = _a.price, inStock = _a.inStock;
    if (!name || price === undefined || inStock === undefined) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    var newProduct = {
        id: (products.length + 1).toString(),
        name: name,
        price: price,
        inStock: inStock,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});
// PUT update product
router.put("/:id", function (req, res) {
    var productIndex = products.findIndex(function (p) { return p.id === req.params.id; });
    if (productIndex === -1) {
        return res.status(404).json({ error: "Product not found" });
    }
    var _a = req.body, name = _a.name, price = _a.price, inStock = _a.inStock;
    if (!name || price === undefined || inStock === undefined) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    products[productIndex] = { id: req.params.id, name: name, price: price, inStock: inStock };
    res.status(200).json(products[productIndex]);
});
// PATCH update product price
router.patch("/:id/price", function (req, res) {
    var product = products.find(function (p) { return p.id === req.params.id; });
    var price = req.body.price;
    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }
    if (typeof price !== "number" || price < 0) {
        return res.status(400).json({ error: "Invalid price" });
    }
    product.price = price;
    res.status(200).json(product);
});

// 1. Add a PATCH endpoint /products/:id/inStock to update only the inStock status of a product.

// OUTPUT:
// url: http://localhost:3000/products/2/inStock
// body: {inStock: true}
// {
//   "id": "2",
//   "name": "Apples",
//   "price": 2,
//   "inStock": true
// }

// 2. Return 400 Bad Request if the new status is missing or not a boolean.
// url: http://localhost:3000/products/2/inStock
// body: {inStock: "test"}
// {
//   "error": "New status is not boolean"
// }
router.patch("/:id/inStock", function (req, res) {
    var product = products.find(function (p) { return p.id === req.params.id; });
    var inStock = req.body.inStock;
    if (inStock === undefined) {
        return res.status(400).json({ error: "New status is missing" });
    }
    if (typeof inStock !== "boolean") {
        return res.status(400).json({ error: "New status is not boolean" });
    }
    if (!product) {
        return res.status(400).json({ error: "Product not found" });
    }
    product.inStock = inStock;
    res.status(200).json(product);
});
// DELETE product
router.delete("/:id", function (req, res) {
    var productIndex = products.findIndex(function (p) { return p.id === req.params.id; });
    if (productIndex === -1) {
        return res.status(404).json({ error: "Product not found" });
    }
    products.splice(productIndex, 1);
    res.sendStatus(204);
});
module.exports = router;
