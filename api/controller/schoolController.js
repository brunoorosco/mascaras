const connection = require('../../database/connection')

module.exports = {

    async index(req, res)  {
        const school =  await connection('school').select('*');
        return res.json(school);
     },

    async create(req, res) {
        const {name } = req.body;
           
       await connection('school').insert({
            name,
        })    
        return res.json({"message":"Escola Cadastrada!"})
    },

}