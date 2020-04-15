const connection = require('../../database/connection')

module.exports = {

    async index(req, res) {
        const entrada = await connection('entrada').sum('quantidade as q')
        
       // const saida = await connection('saida').select('*');
     //  const obj = JSON.parse(entrada);
        console.log(entrada)

        return res.json(entrada);
    },

}