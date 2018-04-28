const mongoose = require('mongoose');
const Product = require('../models/product');

exports.get_all_products = (req, res, next) => {
    Product.find()
        .select("name price _id productImage")
        .exec()
        .then(docs => {
            // console.log(docs);
            const response = {
                count: docs.length,
                products: docs.map(doc => {
                    return {
                        name: doc.name,
                        price: doc.price,
                        productImage: doc.productImage,
                        _id: doc._id,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/products/' + doc._id
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
}

exports.create_product = (req, res, next) => {
    //console.log(req.file);
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        productImage: req.file.path
    });

    product
        .save()
        .then(result => {
            // console.log(result);
            res.status(200).json({
                message: 'From Products post',
                createdProduct: {
                    name: result.name,
                    price: result.price,
                    productImage: result.productImage,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/products/' + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });

}

exports.get_product_by_id = (req, res, next) => {
    const id = req.params.id;
    Product.findById(id)
        .select("name price _id productImage")
        .exec()
        .then(doc => {
            //console.log(doc);
            if (doc) {
                res.status(200).json({
                    product: doc,
                    request: {
                        type: 'GET',
                        description: 'GET All Products',
                        url: 'http://localhost:3000/products'
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
}

exports.update_product = (req, res, next) => {
    const id = req.params.id;
    const updateOpts = {};
    for (const opt of req.body) {
        updateOpts[opt.propName] = opt.value;
    }
    Product.update({ _id: id }, { $set: updateOpts })
        .exec()
        .then(result => {
            //console.log(result);
            if (result.n > 0) {
                res.status(200).json({
                    message: "Product updated",
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/products/' + id
                    }
                });
            }
            else {
                return res.status(404).json({
                    message: "Product not found"
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}

exports.delete_product = (req, res, next) => {
    const id = req.params.id;
    Product.remove({ _id: id })
        .exec()
        .then(result => {
            if (result.n > 0) {
                res.status(200).json({
                    message: "Product delete",
                    request: {
                        type: 'POST',
                        url: 'http://localhost:3000/products',
                        body: { name: 'String', price: 'Number' }
                    }
                });
            }
            else {
                return res.status(404).json({
                    message: "Product not found"
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}