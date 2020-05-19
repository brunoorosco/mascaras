const connection = require('../../database/connection')

module.exports = {

    async index(req, res) {
        const { id } = req.query;
        console.log(id)
        const     material = await connection('material')
        return res.json(material);
    },

    async create(req, res) {
    
        const { cnpj,name,street, number, city, state, telephone,celular,contact, email, payment_id } = req.body;
        const [id] = await connection('material').insert({
            cnpj,
            name,
            street,
            number,
            city,
            state,
            telephone,
            celular,
            contact,
            email,
            payment_id,
       })
        return res.json({ "message": "material Cadastrado!" })
    },
    async edit(req, res) {
    
        const { cnpj,name,street, number, city, state, telephone,celular,contact, email, payment_id } = req.body;
        const [id] = await connection('material').insert({
            cnpj,
            name,
            street,
            number,
            city,
            state,
            telephone,
            celular,
            contact,
            email,
            payment_id,
       })
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