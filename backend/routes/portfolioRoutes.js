import express from 'express'
const router = express.Router()

import {postComment,getAllComments} from '../controllers/PortfolioController.js'

router.route('/comment').post(postComment).get(getAllComments)




export default router