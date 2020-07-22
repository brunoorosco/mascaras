const connection = require('../../database/connection')

module.exports = {

    async index(req, res) {
        const saida = await connection('entradaEstoque');
        return res.json(saida);
    },

    async create(req, res) {

        const { notaFiscal, dataEntrada, material_id, quantity, unitPrice, totalPrice, fornecedor_id, code } = req.body;

        await connection('entradaEstoque').insert({
            notaFiscal,
            dataEntrada,
            material_id,
            quantity,
            unitPrice,
            totalPrice,
            fornecedor_id
        })
        const quant_total = await connection('material').select('total').where({ code: code }) //pega o valor atual do estoque

        const total = parseFloat(quant_total[0].total) + parseFloat(quantity) //soma o valor atual ao novo valor
        console.log(total)
        await connection('material') //atualiza o valor total
            .where({ code: code })
            .update({ total },
                ['total'])

        return res.json({ "message": "Entrada Realizada!" })
    },
    async edit(req, res) {

        const { notaFiscal, dataEntrada, material_id, quantity, unitPrice, totalPrice, fornecedor_id } = req.body;
        console.log(req.body)

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


        // if (incident.ong_id !== ong_id) {
        //     return res.status(401).json({ error: "Operation not permitted." })
        // }
        await connection('entradaEstoque').where('id', id).delete();
        return res.json({ "message": "Exclusão Realizada!" });
    },

}