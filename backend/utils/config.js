require('dotenv').config()
const mongoose=require("mongoose")

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const dbConnect = async () => {

    try {
        await mongoose.connect(MONGODB_URI)
        console.log('MongoDb connected')
    }
    catch(error){
        console.log(error.message)
    }

}
module.exports = {
  MONGODB_URI,
  PORT,
  dbConnect
}