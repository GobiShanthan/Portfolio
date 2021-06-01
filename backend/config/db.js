import mongoose from "mongoose"

const connectDB = async ()=>{
    try{
        const connected = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })
        console.log(`MongoDB connected:${connected.connection.host}`)
    }catch(error){
        console.error(`Error:${err.message}`)
        process.exit(1)
    }
}


export default connectDB