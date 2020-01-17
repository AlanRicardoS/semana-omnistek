const express = require("express");
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')


mongoose.connect("mongodb+srv://semana-omnistek:lfs123@cluster0-bf1pa.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(express.json())
app.use(routes)




// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros
// Query: request.query (Filtro, ordenação, paginação, ...)
// Request: request.params (Identificar um recurso na alteração, ou remoção)
// Body: request.body (dados para crição ou alteração de um registro)

//MongoDB (Não-Relacional)
 

app.listen(3333)