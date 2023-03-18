const express = require("express");
const {createProduct, getProducts, getProduct, updateProduct, searchProducts, getHome} = require("../controllers/products");
const router = express.Router();
const {validatorGetProduct, validatorCreateProduct, validatorProduct, validatorSearchProduct} = require("../validators/products")

router.post('/create', createProduct);

router.get("/all_products", getProducts);

router.get("/search_products/:name", searchProducts, validatorSearchProduct);

router.get("/id/:user_id", validatorGetProduct, getProduct);

router.put("/update/:id", validatorProduct, validatorCreateProduct, updateProduct);

router.get("/home",getHome)

module.exports = router;