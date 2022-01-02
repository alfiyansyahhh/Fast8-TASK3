const { Sequelize, DataTypes} = require("sequelize");
const db = require('../config/db')

const Companies = db.define(
    "companies",
    {
        company_name: {
            type: DataTypes.STRING,

        },
        telephone_number: {
            type: DataTypes.STRING,
              
        },
        is_active: {
            type: DataTypes.STRING,

        },
        address: {
            type: DataTypes.STRING,

        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
)

module.exports = Companies;