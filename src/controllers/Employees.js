const EmployeesModels = require("../models/Employees");
const { Sequelize } = require("sequelize");
const { success, failed } = require("../helpers/response");
const Op = Sequelize.Op;


const Employees = {
    getAll: async (req, res) => {
      try {
        const { query } = req;
        const search = query.search === undefined ? "" : query.search;
        const field = query.field === undefined ? "id" : query.field;
        const typeSort = query.sort === undefined ? "DESC" : query.sort;
        const limit = query.limit === undefined ? 100 : parseInt(query.limit);
        const page = query.page === undefined ? 1 : query.page;
        const offset = page === 1 ? 0 : (page - 1) * limit;
  
        const all = await EmployeesModels.findAll({
          where: {
              name: {
                [Op.like]: `%${search}%`,
              },
            },
        })
  
        const result = await EmployeesModels.findAll({
          where: {
                name: {
                  [Op.like]: `%${search}%`,
                },
              },
              offset,
              limit,
              field,
              typeSort,
            })
            const response = {
              result,
              totalPage: Math.ceil(all.length/limit),
              limit,
              page,
            }
          success(res, response, 'Get All Employees Success');
      } catch (error) {
        failed(res, 404, error);
      }
    },
    getDetail: async (req, res) => {
      try {
        const id = req.params.id;
        const result = await EmployeesModels.findAll({
          where: {
            id,
          },
        });
        success(res, result, "Get Details Users Success");
      } catch (error) {
        failed(res, 404, error);
      }
    },
    update: async (req, res) => {
      try {
        const {
          name,
          email,
          phone_number,
          jobtitle,
          company_id
        } = req.body;
        
        const id = req.params.id;
        const result = await EmployeesModels.update(
          {
            name,
            email,
            phone_number,
            jobtitle,
            company_id     
          },
          {
            where: {
              id,
            },
          });
     
        success(res, result, "Update Data Success");
        
      } catch (error) {
        failed(res, 500, error);
      }
    },
    deleteEmployees: async (req, res) => {
      try {
            
        const id = req.params.id;
        const result = await EmployeesModels.destroy(
          {
            where: {
              id,
            },
          });
     
        success(res, result, "Delete Data Success");
        
      } catch (error) {
        failed(res, 500, error);
      }
    },
}

module.exports = Employees;