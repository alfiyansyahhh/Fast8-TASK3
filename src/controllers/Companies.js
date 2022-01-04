const CompaniesModels = require("../models/Companies");
const { Sequelize } = require("sequelize");
const { success, failed } = require("../helpers/response");
const Op = Sequelize.Op;


const Companies = {
    getAll: async (req, res) => {
      try {      
        const { query } = req;
        const search = query.search === undefined ? "" : query.search;
        const field = query.field === undefined ? "id" : query.field;
        const typeSort = query.sort === undefined ? "DESC" : query.sort;
        const limit = query.limit === undefined ? 100 : parseInt(query.limit);
        const page = query.page === undefined ? 1 : query.page;
        const offset = page === 1 ? 0 : (page - 1) * limit;
  
        const all = await CompaniesModels.findAll({
          where: {
                name: {
                  [Op.like]: `%${search}%`,
                },
              },
        })
  
        const result = await CompaniesModels.findAll({
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
          success(res, response, 'Get All Companies Success');
      } catch (error) {
        failed(res, 404, error);
      }
    },
    getDetail: async (req, res) => {
        try {
          const id = req.params.id;
          const result = await CompaniesModels.findAll({
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
            company_name,
            telephone_number,
            is_active,
            address,
          } = req.body;
          
          const id = req.params.id;
          const result = await CompaniesModels.update(
            {
            company_name,
            telephone_number,
            is_active,
            address,    
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
          const result = await CompaniesModels.destroy(
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

module.exports = Companies;