const express =  require('express');
const app = express();
const morgan = require('morgan');

const productApi = require('./api/routes/products');
const orderApi = require('./api/routes/orders');

app.use(morgan('dev'));

app.use('/products', productApi);
app.use('/orders', orderApi);

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message
        }
    });
});

module.exports = app;