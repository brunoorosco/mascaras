const connection = require('../../database/connection')

module.exports = {

    async index(req, res) {
        const saida = await connection('entradaEstoque');
        return res.json(saida);
    },

    async create(req, res) {

        const { notaFiscal, dataEntrada, material_id, quantity, unitPrice, totalPrice, fornecedor_id } = req.body;

        await connection('entradaEstoque').insert({
            notaFiscal,
            dataEntrada,
            material_id,
            quantity,
            unitPrice,
            totalPrice,
            fornecedor_id
        })
        return res.json({ "message": "Entrada Realizada!" })
    },
    async delete(req, res) {
        const { id } = req.params;
        // const ong_id = req.headers.authorization;
        await connection('saida')
            .where('id', id)
            // .select('ong_id')
            .first();

        // if (incident.ong_id !== ong_id) {
        //     return res.status(401).json({ error: "Operation not permitted." })
        // }
        await connection('entradaEstoque').where('id', id).delete();
        return res.status(204).send();
    }

}