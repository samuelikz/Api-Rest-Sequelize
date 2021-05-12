exports.listAll = (req,res) => {
    let usuarios = [
        {
            nome: 'teste 01',
            email: 'teste@123.com'
        },
        {
            nome: 'teste 02',
            email: 'teste@231.com'
        }
    ]
    res.send(usuarios)
}

exports.createOne = (req,res) => {
    res.send('Usuario Criado!')
}