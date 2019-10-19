const express = require ('express');
const mongoose = require ('mongoose');
const cors = require('cors');
const requireDir = require ('require-dir');

/*
Necessário instalar o docker e fazer download do mongodb

docker pull mongo

 */


//Iniciando App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando Banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology: true, useNewUrlParser: true});

requireDir('./src/models/');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(7001);