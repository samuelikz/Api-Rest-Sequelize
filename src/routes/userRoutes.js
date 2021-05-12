module.exports = function(app){
    const usuarios = require('../controllers/userControllers')

    app.route('/').get((req,res) => {res.send('API ON')})

    app.route('/usuarios')
        .get(usuarios.listAll)
        .post(usuarios.createOne)
}