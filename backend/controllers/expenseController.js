const Expense = require('../models/Expense')
const expressAsyncHandler = require('express-async-handler')


const createExpense = expressAsyncHandler(async (req, res) => {
	const { title, amount, description, user } = req.body

	try {
		const expense = await Expense.create({   // we create the expense in the db. If key name = value we write once
			title,
			amount,
			description,
			user
		})
		res.json(expense)
	} catch (error) {
		res.json(error)
	}

})

const fetchAllExpenses = expressAsyncHandler(async (req, res) => {
  const { page } = req.query
	try {
		const expense = await Expense.paginate({}, { limit: 10, page: Number(page) })
		res.json(expense)
	} catch (error) {
		res.json(error)
	}

})


const fetchExpense = expressAsyncHandler(async (req, res) => {
	const { id } = req.params
	try {
		const expense = await Expense.findById(id)
		res.json(expense)
	} catch (error) {
		res.json(error)
	}

})

// update

const updateExpense = expressAsyncHandler(async (req, res) => {
	const { id } = req.params
  const { title, amount, description } = req.body

	try {
		const expense = await Expense.findByIdAndUpdate(id, {
      title, amount, description
    },{new: true})
		res.json(expense)
	} catch (error) {
		res.json(error)
	}

})

const deleteExpense = expressAsyncHandler(async (req, res) => {
	const { id } = req.params
	try {
		const expense = await Expense.findByIdAndDelete(id)
		res.json(expense)
	} catch (error) {
		res.json(error)
	}

})




module.exports = { createExpense,
  fetchAllExpenses, 
  fetchExpense, 
  updateExpense,
  deleteExpense }