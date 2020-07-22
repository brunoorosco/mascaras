const connection = require('../../database/connection')

module.exports = {

    async index(req, res) {
        const { id } = req.query;
        const material = await connection('material')
        return res.json(material);
    },

    async create(req, res) {
        console.log(req.body)
        const { code,description, deadline, largura, deadlineDescription, rendimento, uniMed } = req.body;
        const [id] = await connection('material').insert({
            code, description, deadline, largura, deadlineDescription , rendimento, uniMed
        })
        return res.json({ "message": "material Cadastrado!" })
    },
    async edit(req, res) {


        const { id, code, description, deadline, largura, deadlineDescription, rendimento, uniMed } = req.body;
        console.log(req.body);

        await connection('material')
            .where({ id: id })
            .update({ code, description, deadline, largura, rendimento, deadlineDescription, uniMed },
                ['id', 'code','description', 'deadline', 'largura', 'rendimento', 'deadlineDescription', 'uniMed'])

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