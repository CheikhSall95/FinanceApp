const Income = require('../models/Income')
const expressAsyncHandler = require('express-async-handler')


const createIncome = expressAsyncHandler(async (req, res) => {
  const { title, amount, description, user } = req.body

  try {
    const income = await Income.create({   // we create the income in the db. If key name = value we write once
      title,
      amount,
      description,
      user
    })
    res.json(income)
  } catch (error) {
    res.json(error)
  }

})

const fetchAllIncomes = expressAsyncHandler(async (req, res) => {
  const { page } = req.query
  try {
    //instead of using find we use paginate to limit results  //populate user
    const income = await Income.paginate({}, { limit: 10, page: Number(page), populate: 'user' })
    res.json(income)
  } catch (error) {
    res.json(error)
  }

})


const fetchIncome = expressAsyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    const income = await Income.findById(id)
    res.json(income)
  } catch (error) {
    res.json(error)
  }

})

// update

const updateIncome = expressAsyncHandler(async (req, res) => {
  const { id } = req.params
  const { title, amount, description } = req.body

  try {
    const income = await Income.findByIdAndUpdate(id, {
      title, amount, description
    }, { new: true })
    res.json(income)
  } catch (error) {
    res.json(error)
  }

})

const deleteIncome = expressAsyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    const income = await Income.findByIdAndDelete(id)
    res.json(income)
  } catch (error) {
    res.json(error)
  }

})




module.exports = {
  createIncome,
  fetchAllIncomes,
  fetchIncome,
  updateIncome,
  deleteIncome
}