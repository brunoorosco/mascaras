const connection = require('../../database/connection')

module.exports = {

    async index(req, res) {
    //    const entrada = await connection('stock').sum('quantidade as q')   
        const material = await connection('saida').select('*');
     //  const obj = JSON.parse(entrada);
        console.log(material)

        return res.json(material);
    },

}