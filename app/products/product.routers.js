const express = require("express");
const Productcontrollers = require("./product.controllers");
const upload = require("../../middlewares/fileUpload");

const router = express.Router();

router.post('/uploadFile', upload.single('file'),Productcontrollers.uploadFile)
router.post("/create-product", Productcontrollers.createProduct)
router.post("/singleProduct/", Productcontrollers.singleProduct)
router.get("/get-all-products",Productcontrollers.getAllProducts)
router.get("/get-product-by-id/:id", Productcontrollers.getProductById)
router.delete("/delete-product-by-id/:id", Productcontrollers.deleteProductById)
router.patch('/update-product-by-id/:id', Productcontrollers.updateProductById)
module.exports = router;