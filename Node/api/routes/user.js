const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const userAuth = require('../middleware/check-auth');

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.delete('/:id', userAuth, userController.delete_user);

module.exports = router;