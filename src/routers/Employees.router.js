const express = require('express');
const { 
    getAll,
} = require('../controllers/Employees');

const employeesRouter = express.Router();

employeesRouter
.get('/employees', getAll)


module.exports = employeesRouter;