import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import {errorHandler,notFound } from './middleware/errorMiddleWare.js'
import connectDB from './config/db.js'


//routes
import portfolioRoute from './routes/portfolioRoutes.js'
import productRoute from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from "./routes/uploadRoutes.js"


dotenv.config()
connectDB()
const app = express();

app.use(express.json())
app.use(morgan("dev"))


//run routes
app.use("/api/portfolio",portfolioRoute)
app.use("/api/products",productRoute)
app.use("/api/users",userRoutes)
app.use("/api/orders",orderRoutes)

//imageupload route
app.use("/api/upload",uploadRoutes)

//Paypal clientId
app.get("/api/config/paypal",(req,res)=>
    res.send(process.env.PAYPAL_CLIENT_ID)
)

//make upload folder static
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}


//handle errors custom
app.use(notFound)
app.use(errorHandler)




const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));