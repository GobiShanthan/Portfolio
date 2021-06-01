import express from "express"
const router = express.Router()

import {protect,admin} from '../middleware/authMiddleware.js'
import {authUser,registerUser,getAllUsers,getUserByParamsId,updateUserByParamsId,getUserProfile,updateUserProfile,deleteUserById} from '../controller/userController.js'


router.route('/').get(protect,admin,getAllUsers).post(registerUser)
router.post('/login',authUser)
router.route('/loggeduser')
.get(protect,getUserProfile)
.put(protect,updateUserProfile)
router.route('/:id')
.get(protect,admin,getUserByParamsId)
.put(protect,admin,updateUserByParamsId)
.delete(protect,admin,deleteUserById)


export default router