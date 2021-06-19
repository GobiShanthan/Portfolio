import express from 'express'
const router = express.Router()

import {postComment,getAllComments,fetchOpenApi,fetchOpenWeatherForcast} from '../controllers/PortfolioController.js'

router.route('/comment').post(postComment).get(getAllComments)
router.get('/openweather/:id',fetchOpenApi)
router.get('/openwforcast/:id',fetchOpenWeatherForcast)


export default router