const express = require('express');
const { 
    getAll,
    getDetail,
    update,
    deleteCompanies
} = require('../controllers/Companies');

const companiesRouter = express.Router();

companiesRouter
.get('/companies', getAll)
.get('/detailcompanies/:id', getDetail)
.put('/companies/:id', update)
.delete('/companies/:id', deleteCompanies);

module.exports = companiesRouter;