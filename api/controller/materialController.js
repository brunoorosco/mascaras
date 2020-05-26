const connection = require('../../database/connection')

module.exports = {

    async index(req, res) {
        const { id } = req.query;
        console.log(id)
        const material = await connection('material')
        return res.json(material);
    },

    async create(req, res) {

        const { description, deadline, largura, observa, rendimento } = req.body;
        const [id] = await connection('material').insert({
            description, deadline, largura, observa, rendimento
        })
        return res.json({ "message": "material Cadastrado!" })
    },
    async edit(req, res) {

        const { id, description, deadline, largura, deadlineDescription, rendimento } = req.body;


        await connection('material')
            .where({ id: id })
            .update({ description, deadline, largura, rendimento, deadlineDescription },
                ['id', 'description', 'deadline', 'largura', 'rendimento', 'deadlineDescription'])

        return res.json({ "message": "material Cadastrado!" })
    },
    async delete(req, res) {
        const { id } = req.params;
        // const ong_id = req.headers.authorization;


        // if (incident.ong_id !== ong_id) {
        //     return res.status(401).json({ error: "Operation not permitted." })
        // }
        await connection('material').where('id', id).delete();
        return res.status(204).send();
    }

}