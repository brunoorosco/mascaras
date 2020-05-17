const express = require('express')

const routes = express.Router();

const schoolController = require('./controller/schoolController')
const productionController = require('./controller/productionController')
const stockController = require('./controller/stockController')
const saidaController = require('./controller/saidaController')
const cnpjController = require('./controller/cnpjController')
const fornecedorController = require('./controller/fornecedorController')
const materialController = require('./controller/materialController')

routes.post('/saida', saidaController.create)
routes.get('/saida', saidaController.index)

routes.get('/production', productionController.index)
routes.post('/production', productionController.create)

routes.get('/fornecedor', fornecedorController.index)
routes.post('/fornecedor', fornecedorController.create)
routes.delete('/fornecedor/:id', fornecedorController.delete)

routes.get('/material', fornecedorController.index)
routes.post('/material', fornecedorController.create)
routes.delete('/material/:id', fornecedorController.delete)

routes.get('/school', schoolController.index)
routes.post('/school', schoolController.create)

routes.get('/stock', stockController.index)

routes.get('/cnpj/:cnpj', cnpjController.buscar)


module.exports = routes;