const express = require('express');
const router = express.Router();

const userAuth = require('../middleware/check-auth');

const OrdersController = require('../controllers/orders');

router.get('/', userAuth, OrdersController.orders_get_all);

router.post('/', userAuth, OrdersController.create_order);

router.get('/:id', userAuth, OrdersController.get_order_by_id);

router.patch('/:id', userAuth, OrdersController.update_order);

router.delete('/:id', userAuth, OrdersController.delete_order);

module.exports = router;