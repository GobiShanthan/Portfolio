import express from "express"
const router = express.Router()

import {authUsers,registerUser,getAllUsers,getUserProfile,updateUserProfile,getUserByParamsId,updateUserByParamsId,deleteUserById} from "../controllers/UserController.js"
import {protect,admin} from "../middleware/authMiddleWare.js"

router.route("/").post(registerUser).get(protect,admin,getAllUsers)
router.post("/login",authUsers)
router.route("/profile").get(protect,getUserProfile).put(protect,updateUserProfile)

router.route("/:id")
.delete(protect,admin,deleteUserById)
.get(protect,admin,getUserByParamsId)
.put(protect,admin,updateUserByParamsId)

export default router