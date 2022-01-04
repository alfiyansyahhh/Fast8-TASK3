const express = require('express');
const { 
    getAll,
    getDetail
} = require('../controllers/Employees');

const employeesRouter = express.Router();

employeesRouter
.get('/employees', getAll)
.get('/detailemployees/:id', getDetail)



module.exports = employeesRouter;