const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

const routes = require('./src/routes/userRoutes')
routes(app)

const port = process.env.PORT || 3000

app.listen(port)

console.log(`Servidor Funcionando na porta ${port}`)
