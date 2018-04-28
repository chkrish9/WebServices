const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');
const Product = require('../models/product');

router.get('/', (req, res, next) => {
    Order.find()
        .select("productId quantity _id")
        .exec()
        .then(docs => {
            // console.log(docs);
            const response = {
                count: docs.length,
                orders: docs.map(doc => {
                    return {
                        productId: doc.productId,
                        quantity: doc.quantity,
                        _id: doc._id,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/orders/' + doc._id
                        }
                    }
                })
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.post('/', (req, res, next) => {
    Product.findById(req.body.productId)
        .then(product => {
            if (!product) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }
            const order = new Order({
                _id: new mongoose.Types.ObjectId(),
                productId: req.body.productId,
                quantity: req.body.quantity
            });
            return order.save()
        })
        .then(result => {
            // console.log(result);
            res.status(200).json({
                message: 'From Orders post',
                createdOrder: {
                    productId: result.productId,
                    quantity: result.quantity,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/orders/' + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Order.findById(id)
        .select("productId quantity _id")
        .exec()
        .then(doc => {
            //console.log(doc);
            if (doc) {
                res.status(200).json({
                    order: doc,
                    request: {
                        type: 'GET',
                        description: 'GET All Orders',
                        url: 'http://localhost:3000/orders'
                    }
                });
            }
            else {
                res.status(404).json({ message: "No data found" });
            }

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    const updateOpts = {};
    for (const opt of req.body) {
        updateOpts[opt.propName] = opt.value;
    }
    if (updateOpts.productId != undefined) {
        Product.findById(req.body.productId)
            .then(product => {
                if (!product) {
                    return res.status(404).json({
                        message: "Product not found"
                    });
                }
                return Order.update({ _id: id }, { $set: updateOpts })
            })
            .then(result => {
                //console.log(result);
                res.status(200).json({
                    message: "Order updated",
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/orders/' + id
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err });
            });
    } else {
        Order.update({ _id: id }, { $set: updateOpts })
            .exec()
            .then(result => {
                //console.log(result);
                if (result.n > 0) {
                    res.status(200).json({
                        message: "Order updated",
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/orders/' + id
                        }
                    });
                }
                else {
                    return res.status(404).json({
                        message: "Order not found"
                    });
                }

            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err });
            });
    }
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Order.remove({ _id: id })
        .exec()
        .then(result => {
            //console.log(result);
            if (result.n > 0) {
                res.status(200).json({
                    message: "Order deleted",
                    request: {
                        type: 'POST',
                        url: 'http://localhost:3000/orders',
                        body: { productId: 'Id', quantity: 'Number' }
                    }
                });
            }
            else {
                return res.status(404).json({
                    message: "Order not found"
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;