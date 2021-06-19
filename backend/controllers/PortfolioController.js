import asyncHandler from 'express-async-handler'
import Portfolio from '../models/PortfolioModel.js'
import fetch from 'node-fetch'


//@desc post a comment for contact
//@route POST/api/portfolio/comment
//@access Public

const postComment = asyncHandler(async(req,res)=>{
    const {name,email,phoneNumber,comment} = req.body

    const newComment = new Portfolio({
        name,
        email,
        phoneNumber,
        comment,
    })
    const createdComment = await newComment.save()
    res.status(201).json({message:'Post successful, i will contact you shortly.'})
})



//@desc get comments from portfolio contacts
//routes GET/api/portfolio/comment
const getAllComments = asyncHandler(async(req,res)=>{
    const allComments = await Portfolio.find()
    res.status(201).json(allComments)
})



//Fetch from OpenWeather api
const fetchOpenApi = asyncHandler(async(req,res)=>{
    const city = req.params.id
    const openApiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}`
    const fetchedData = await fetch(openApiUrl)
    const fetchedJson = await fetchedData.json()
    res.json(fetchedJson)
})


//Fetch 7 day and 48 hours forcast from open api
const fetchOpenWeatherForcast =asyncHandler(async(req,res)=>{
    const data = req.params.id
    const lat = data.split(',')[0]
    const lon = data.split(',')[1]
    const forcastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${process.env.OPEN_WEATHER_API_KEY}`
    const fetchedData = await fetch(forcastUrl)
    const fetchedJson = await fetchedData.json()
    res.json(fetchedJson)
})


export {postComment,getAllComments,fetchOpenApi,fetchOpenWeatherForcast}