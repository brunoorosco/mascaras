//Arquivo responsavel por fazer a busca do CNPJ externamento
const receitaws = require('receitaws')

module.exports = {

    async buscar(req, res) {

        const cnpj = req.params.cnpj;
        console.log(cnpj);

        // configuração
        const opt = {
            timeout: 10000
        }
        // instancia passando o parametro opt
        const instance = receitaws(opt)

        // faz a requisição
        instance(cnpj).then(v => res.json(v.data), (error => console.log(error)))

    }


}