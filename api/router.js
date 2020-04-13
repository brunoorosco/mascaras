const express = require('express')
const routes = express.Router();

const schoolController = require('./controller/schoolController')
const productionController = require('./controller/productionController')

routes.post('/saida', (req,res)=>{
    const body = req.body;

    console.log(body);
    res.json({"message" : "ok"})
})

routes.post('/production', (req,res)=>{
    const body = req.body;

    console.log(body);
    res.json({"message" : "ok"})
})

routes.get('/school',  schoolController.index)

routes.post('/school', schoolController.create)


module.exports = routes;