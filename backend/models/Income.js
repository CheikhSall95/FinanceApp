
const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const incomeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Ttile is required'],

  },
  description: {
    type: String,
  },
  category: {
    type: String,
    default: "income"
  },

  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    default: 0
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, // must be mongodb id
    ref: 'User',// the model the we are referring to
    required: [true, 'User ID is required']
  }

})


incomeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v

  }
})

// pagination
incomeSchema.plugin(mongoosePaginate)


const Income = mongoose.model('Income', incomeSchema)

module.exports = Income