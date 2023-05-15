const express = require('express')

const { createIncome, 
  fetchIncome, 
  updateIncome,
  fetchAllIncomes,
  deleteIncome
} = require('../controllers/incomeController')
const authMiddleware = require('../middlewares/authMiddleware')
const incomeRouter = express.Router()


incomeRouter.post('/', authMiddleware, createIncome)
incomeRouter.get('/', authMiddleware, fetchAllIncomes)
incomeRouter.get('/:id',authMiddleware, fetchIncome) // api/income/id
incomeRouter.put('/:id',authMiddleware, updateIncome) // update the income
incomeRouter.delete('/:id',authMiddleware, deleteIncome) // delete income
module.exports = incomeRouter