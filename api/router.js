const express = require('express')
const routes = express.Router();

const schoolController = require('./controller/schoolController')
const productionController = require('./controller/productionController')
const stockController = require('./controller/stockController')

routes.post('/saida', (req,res)=>{
    const body = req.body;

    console.log(body);
    res.json({"message" : "ok"})
})

routes.post('/production', productionController.create)

routes.get('/school',  schoolController.index)

routes.post('/school', schoolController.create)

routes.get('/stock', stockController.index)

module.exports = routes;