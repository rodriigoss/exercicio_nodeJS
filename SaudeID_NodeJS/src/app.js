const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const config = require('./config');

const app = express();
const router = express.Router();

// Carrega os Models
const Product = require('./models/post');
const Customer = require('./models/autor');

// Carrega as Rotas
const indexRoute = require('./routes/indexRoutes');
const postRoute = require('./routes/postRoutes');
const autorRoute = require('./routes/autorRoutes');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/post', postRoute);
app.use('/autor', autorRoute);

app.listen(3000);