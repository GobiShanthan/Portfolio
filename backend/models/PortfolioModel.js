import mongoose from 'mongoose'


const portfolioSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
    },
    comment:{
        type:String,
    }
},{timeStamps:true})


const Portfolio = mongoose.model('Portfolio',portfolioSchema)
export default Portfolio