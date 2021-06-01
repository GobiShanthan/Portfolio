import express from "express"
const router = express.Router()
import { getProducts, getProductsById,deleteProductById,createProduct,updateProduct,createProductReview,getTopProducts } from "../controllers/productController.js"
import {protect,admin} from "../middleware/authMiddleWare.js"


router.get("/top",getTopProducts)
router.route("/").get(getProducts).post(protect,admin,createProduct)
router.route("/:id").get(getProductsById).delete(protect,admin,deleteProductById).put(protect,admin,updateProduct)
router.route("/:id/reviews").post(protect,createProductReview)



export default router
