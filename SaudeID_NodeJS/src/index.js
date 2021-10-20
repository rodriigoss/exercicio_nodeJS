const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(json());
app.use(urlencoded({extended: false}));

require('./controllers/authController')(app);
require('./controllers/postontroller')(app);

app.listen(3000);