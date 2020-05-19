const materialController = require('./../controller/materialController')

const matRouter = (app) => {
    app.get('/material', materialController.index)
    
    app.route('/material/:id?')
        .get(materialController.index)
        .post(materialController.create)
        .delete(materialController.delete)

        app.get('/users', (req, res) => {
            Users.find({}).then((users) => {
                return res.json(users)
            }).catch((error) => {
                return res.json({
                    error: false,
                    message: "nenhum Usuário encontrado",
                })
            })
        })
        app.get('/users/:id', (req, res) => {
            Users.findOne({_id: req.params.id}).then((users) => {
                return res.json(users)
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    message: "Usuário não encontrado",
                })
            })
        })

}

module.exports = matRouter