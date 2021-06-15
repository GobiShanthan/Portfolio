import asyncHandler from 'express-async-handler'
import Portfolio from '../models/PortfolioModel.js'



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




export {postComment,getAllComments}