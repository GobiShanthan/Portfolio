import express from "express"
const router = express.Router()

import {protect,admin} from '../middleware/authMiddleware.js'
import {getAllProducts,createProduct,updateProduct, getProduct, removeProduct,createProductReview, getAllReviews,getTopProducts} from '../controller/productController.js'


router.route('/').get(getAllProducts).post(protect,admin,createProduct)

router.route('/:id')
.get(getProduct)
.put(protect,admin,updateProduct)
.delete(protect,admin,removeProduct)

router.get("/top/rated",getTopProducts)


router.route("/:id/reviews")
.post(protect,createProductReview)
.get(getAllReviews)


export default router