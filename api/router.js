const express = require('express')
const routes = express.Router();

const schoolController = require('./controller/schoolController')
const productionController = require('./controller/productionController')
const stockController = require('./controller/stockController')
const saidaController = require('./controller/saidaController')

routes.post('/saida', (req,res)=>{
    const body = req.body;

    console.log(body);
    res.json({"message" : "ok"})
})

routes.get('/saida', saidaController.index)

routes.get('/production', productionController.index)

routes.post('/production', productionController.create)

routes.get('/school',  schoolController.index)

routes.post('/school', schoolController.create)

routes.get('/stock', stockController.index)

module.exports = routes;