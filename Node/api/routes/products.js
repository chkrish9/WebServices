const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'From Products get'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        message : 'From Products post',
        createdProduct : product
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    if (id === 'hi' ){
        res.status(200).json({
            message : 'you send this hi',
            id : id
        });
    }
    else{
        res.status(200).json({
            message : 'you send this id ' + id
        });
    }
});

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message : 'Updated id '+ id
    });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message : 'Deleted product '+ id
    });
});

module.exports = router;