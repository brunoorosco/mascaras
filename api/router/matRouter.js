const materialController = require('./../controller/materialController')

const matRouter = (app) => {
    app.route('/material/:id?')
        .get(materialController.index)
        .post(materialController.create)
        .delete(materialController.delete)

}

module.exports = matRouter