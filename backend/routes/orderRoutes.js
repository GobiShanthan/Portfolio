import express from 'express'
const router = express.Router()

import {protect,admin} from '../middleware/authMiddleware.js'
import {addCreateOrder,getOrderByParams,updateOrderToPaid,getOrderList,deleteOrder,updateOrderToDelivered} from '../controller/orderController.js'



router.route('/').post(protect,addCreateOrder).get(protect,admin,getOrderList)
router.route('/:id').get(protect,getOrderByParams).put(protect,admin,updateOrderToDelivered).delete(protect,admin,deleteOrder)
router.route('/:id/pay').put(protect,updateOrderToPaid)






export default router