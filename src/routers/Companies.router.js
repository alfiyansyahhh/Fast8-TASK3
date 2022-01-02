const express = require('express');
const { 
    getAll,
} = require('../controllers/Companies');

const companiesRouter = express.Router();

companiesRouter
.get('/companies', getAll)

module.exports = companiesRouter;