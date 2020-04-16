const connection = require('../../database/connection')

module.exports = {

    async index(req, res) {
        const school = await connection('school').select('*').orderBy('name');
        return res.json(school);
    },

    async create(req, res) {
       const { name } = req.body;
       let message = "Cadastro realizado com sucesso!"

        const school = await connection('school')
            .select('name')
            .where({ name })
            .then(rows => {
                // console.log(rows)

                if (rows == "") {

                  return connection('school').insert({
                        name,
                    })
                  
                }else{
                    message= "Já existe essa escola";
                }
               
            }) .then(function(id) {
                return res.json({ "message": message })
              })
            .catch(function (error) {
                console.error(error)
            });



    },

}