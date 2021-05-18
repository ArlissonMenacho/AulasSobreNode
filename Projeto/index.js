const express = require('express')

const app = express()

app.listen(3000,()=>console.log('servidor rodando porta 3000'))

app.get('/',(req,res)=>res.send('Servidor rodando. Ok'))

app.get('/Atendimentos',(req,res)=>res.send('Você está na rota de atendimentos e realizando um get'))