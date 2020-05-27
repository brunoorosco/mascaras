const express = require('express')
const routes = express.Router();


const schoolController = require('./controller/schoolController')
const productionController = require('./controller/productionController')
const stockController = require('./controller/stockController')
const cnpjController = require('./controller/cnpjController')
const fornecedorController = require('./controller/fornecedorController')

const matRouter = require('./router/matRouter')
const stockRouter = require('./router/matRouter')

routes.get('/production', productionController.index)
routes.post('/production', productionController.create)

routes.get('/fornecedor', fornecedorController.index)
routes.post('/fornecedor', fornecedorController.create)
routes.delete('/fornecedor/:id', fornecedorController.delete)

matRouter(routes)
stockRouter(routes)

routes.get('/school', schoolController.index)
routes.post('/school', schoolController.create)

routes.get('/stock', stockController.index)

routes.get('/cnpj/:cnpj', cnpjController.buscar)


module.exports = routes;