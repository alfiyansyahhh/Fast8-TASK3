const { Sequelize, DataTypes} = require("sequelize");
const db = require('../config/db')

const Employees = db.define(
    "employees",
    {
        name: {
            type: DataTypes.STRING,

        },
        email: {
            type: DataTypes.STRING,
              
        },
        Phone_number: {
            type: DataTypes.STRING,

        },
        jobtitle: {
            type: DataTypes.NUMBER,

        },
        company_id: {
            type: DataTypes.NUMBER,

        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
)

module.exports = Employees;