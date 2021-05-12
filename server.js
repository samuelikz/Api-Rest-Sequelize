const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.route('/').get((req,res) => {
    res.send('Deu Certo')
})
.post((req,res) =>{
    res.send(req.body)
})

const port = process.env.PORT || 3000

app.listen(port)

console.log(`Servidor Funcionando na porta ${port}`)
