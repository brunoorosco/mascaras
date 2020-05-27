const stockController = require('../controller/stockController')
const outStockController = require('../controller/outStockController')
const inStockController = require('../controller/inStockController')
const connection = require('../../database/connection')

const matRouter = (app) => {
    
    app.get('/stock', stockController.index)

    app.get('/stock/:id?', async (req, res) => {
        const { id } = req.params;
        console.log(id)
        const material = await connection('material').where('id', id);

        return res.json(material);
    })

  
    app.route('/stock/input/:id?')
      .get(inStockController.index)  
      .post(inStockController.create)
      .put(inStockController.edit)
      .delete(inStockController.delete)
   
    app.route('/stock/output/:id?')
      .get(outStockController.index)  
      .post(outStockController.create)
      .put(outStockController.edit)
      .delete(outStockController.delete)
   
}

module.exports = matRouter