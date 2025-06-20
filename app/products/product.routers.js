const express = require("express");
const Productcontrollers = require("./product.controllers");

const router = express.Router();

router.post("/create-product", Productcontrollers.createProduct)
router.post("/singleProduct", Productcontrollers.singleProduct)
router.get("/getAllproducts ",Productcontrollers.getAllProducts)
router.get("/get-product-by-id/:id", Productcontrollers.getProductById)
router.delete("/delete-product-by-id/:id", Productcontrollers.deleteProductById)
router.patch('/update-product-by-id/:id', Productcontrollers.updateProductById)
module.exports = router