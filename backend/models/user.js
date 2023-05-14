
const mongoose=require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')


const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:[true, 'Username is required'], 
        unique: true
    },
    email:{
        type:String,
        required:[true, 'The Email is required']
    },
    password:{
        type:String,
        required:[true, 'The password is required']
    }
})


userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      // the passwordHash should not be revealed
      delete returnedObject.passwordHash
    }
  })


userSchema.plugin(uniqueValidator)

const User = mongoose.model("User",userSchema )

module.exports=User