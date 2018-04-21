const express =  require('express');
const app = express();

const productApi = require('./api/routes/products');
const orderApi = require('./api/routes/orders');

app.use('/products', productApi);
app.use('/orders', orderApi);

module.exports = app;