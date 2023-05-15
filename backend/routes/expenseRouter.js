const express = require('express')
const expenseRouter = express.Router()
const {  createExpense,
  fetchAllExpenses, 
  fetchExpense, 
  updateExpense,
  deleteExpense
} = require('../controllers/expressController')
const authMiddleware = require('../middlewares/authMiddleware')

expenseRouter.post('/',authMiddleware, createExpense)
expenseRouter.get('/', authMiddleware,fetchAllExpenses)
expenseRouter.get('/:id',authMiddleware, fetchExpense) // api/expense/id
expenseRouter.put('/:id', authMiddleware,updateExpense) // update the expense
expenseRouter.delete('/:id',authMiddleware, deleteExpense) // delete expense
module.exports = expenseRouter