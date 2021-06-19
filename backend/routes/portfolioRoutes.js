import express from 'express'
const router = express.Router()

import {postComment,getAllComments,fetchOpenApi,fetchOpenWeatherForcast,fetchUnsplashApi,fetchYoutubeApi} from '../controllers/PortfolioController.js'

router.route('/comment').post(postComment).get(getAllComments)
router.get('/openweather/:id',fetchOpenApi)
router.get('/openwforcast/:id',fetchOpenWeatherForcast)
router.get('/unsplash/:id',fetchUnsplashApi)
router.get('/youtube/:id',fetchYoutubeApi)

export default router