const express = require('express');
const { 
    getAll,
    getDetail,
    update,
    deleteEmployees
} = require('../controllers/Employees');

const employeesRouter = express.Router();

employeesRouter
.get('/employees', getAll)
.get('/detailemployees/:id', getDetail)
.put('/employees/:id', update)
.delete('/employees/:id', deleteEmployees);


module.exports = employeesRouter;