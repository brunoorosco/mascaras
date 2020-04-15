const connection = require('../../database/connection')

module.exports = {

    async index(req, res) {
        const entrada = await connection('entrada').sum('quantidade as q');

        return res.json(entrada);
    },

    async create(req, res) {
       
        const { material, quantidade, data } = req.body;
        const [id] = await connection('entrada').insert({
            material,
            quantidade,
            data
        })
        return res.json({ "message": "Entrada Realizada!" })
    },
    async delete(req, res) {
        const { id } = req.params;
        // const ong_id = req.headers.authorization;

        const production = await connection('entrada')
            .where('id', id)
            // .select('ong_id')
            .first();

        // if (incident.ong_id !== ong_id) {
        //     return res.status(401).json({ error: "Operation not permitted." })
        // }
        await connection('entrada').where('id', id).delete();
        return res.status(204).send();
    }

}