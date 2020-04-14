const connection = require('../../database/connection')

module.exports = {

    async index(req, res) {
        const entrada = await connection('entrada').select('*');
       // const saida = await connection('saida').select('*');
        

        return res.json(entrada);
    },

}