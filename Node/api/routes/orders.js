const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'From orders get'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message : 'From orders post'
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message : 'From orders get id '+ id
    });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message : 'From orders delete id '+ id
    });
});

module.exports = router;