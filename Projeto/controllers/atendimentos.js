
module.exports = app => {
    app.get('/Atendimentos',(req,res)=>res.send('Você está na rota de atendimentos e realizando um get'))

    app.post('/Atendimentos', (req,res) => {
        console.log(req.body)
        res.send('Você está no atendimento fazendo um post.')
    })  
}

