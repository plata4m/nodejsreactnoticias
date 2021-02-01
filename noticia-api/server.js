const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();
app.use(express.json());

// Iniciando o Banco e Dados.
mongoose.connect('mongodb://localhost:27017/noticiaapi', 
    {   useNewUrlParser: true,  
        useUnifiedTopology: true 
    } 
);
requireDir('./src/models'); 

// USE - todas as requisicoes get, post, put, delete para Rotas ..  
app.use('/api', require('./src/routes'));


app.listen(3001);

