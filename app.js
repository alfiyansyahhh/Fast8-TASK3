const express = require('express')
const bodyparser = require('body-parser')
require('dotenv').config()
const cors = require('cors')
const EmployeesRouter = require('./src/routers/Employees.router');
const companiesRouter = require('./src/routers/companies.router');
const PORT = process.env.PORT

const app  = express()
app.use(cors())
app.use(bodyparser.json())
app.use(EmployeesRouter);
app.use(companiesRouter);

app.get('/', (req, res) => {
    res.json({
      succes: true,
      msg:'it works',
    });
});

app.listen(PORT, () => {
    console.log(`Service running on Port ${PORT}`);
});

module.exports = app;