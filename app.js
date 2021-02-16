const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const productRoute = require('./routes/product');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/', productRoute)


module.exports = app;