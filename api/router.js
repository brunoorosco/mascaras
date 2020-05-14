const express = require('express')
const receitaws = require('receitaws')

const routes = express.Router();

const schoolController = require('./controller/schoolController')
const productionController = require('./controller/productionController')
const stockController = require('./controller/stockController')
const saidaController = require('./controller/saidaController')

routes.post('/saida', saidaController.create)
routes.get('/saida', saidaController.index)

routes.get('/production', productionController.index)
routes.post('/production', productionController.create)

routes.get('/school', schoolController.index)
routes.post('/school', schoolController.create)

routes.get('/stock', stockController.index)


routes.get('/cnpj/:cnpj', (req, res) => {

    const cnpj  = req.params.cnpj;
    console.log(cnpj);

    
    // configuração
    const opt = {
        timeout: 10000
    }


    // instancia passando o parametro opt
    const instance = receitaws(opt)

    // faz a requisição
    instance(cnpj).then(v => res.json(v.data), (error => console.log(error)))
   
})


module.exports = routes;