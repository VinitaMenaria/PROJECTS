const express = require('express') ;
const productController = require('./../Controller/productController')
const router = express.Router()
const upload=require('./../middleware/upload.js')


router.post('/addproduct', upload.single('image'),productController.createProduct)
router.get('/getproducts',productController.getProduct)

module.exports = router ;