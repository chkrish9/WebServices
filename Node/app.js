const express =  require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productApi = require('./api/routes/products');
const orderApi = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/products', productApi);
app.use('/orders', orderApi);

mongoose.connect('mongodb://node-api:'+ 
process.env.MONGO_ATL_PW +
'@cluster0-shard-00-00-ens2i.mongodb.net:27017,cluster0-shard-00-01-ens2i.mongodb.net:27017,cluster0-shard-00-02-ens2i.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers',
   'Origin, X-Requested-With, Content-Type, Accept, Authorization'
   );
   if(req.method === 'OPTIONS')
   {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, GET, DELETE');
        return res.status(200).json({})
   }
   next();
});





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