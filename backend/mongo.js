
const mongoose=require("mongoose")


const dbConnect = async () => {

    try {
        await mongoose.connect("=mongodb+srv://pro3000:gorgui12@users.gyvkwbu.mongodb.net/?retryWrites=true&w=majority")
        console.log('MongoDb connected')
    }
    catch(error){
        console.log(error.message)
    }

}

module.exports=dbConnect