const materialController = require('./../controller/materialController')
const connection = require('../../database/connection')

const matRouter = (app) => {
    app.get('/material', materialController.index)

    app.route('/material/:id?')
      //  .get(materialController.index)
        
      .post(materialController.create)
      .put(materialController.edit)
        


    .delete(materialController.delete)

    app.get('/material/:id?', async (req, res) => {
        const { id } = req.params;
        console.log(id)
        const material = await connection('material').where('id', id);

        return res.json(material);
    })
   
}

module.exports = matRouter