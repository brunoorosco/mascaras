const connection = require('../../database/connection')

module.exports = {

    async index(req, res) {
        const saida = await connection('saida').select('*');
        return res.json(saida);
    },

    async create(req, res) {

       
        const { id_school, quantidade, data } = req.body;
        const [id] = await connection('saida').insert({
            id_school,
            quantidade,
            data
        })
        return res.json({ "message": "Saída Realizada!" })
    },
    async delete(req, res) {
        const { id } = req.params;
        // const ong_id = req.headers.authorization;

        const production = await connection('saida')
            .where('id', id)
            // .select('ong_id')
            .first();

        // if (incident.ong_id !== ong_id) {
        //     return res.status(401).json({ error: "Operation not permitted." })
        // }
        await connection('saida').where('id', id).delete();
        return res.status(204).send();
    }

}