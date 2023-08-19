const express = require('express');

const UserController = require('../controller/users.js')

const router = express.Router();

router.get('/', UserController.getAllusers);

router.post('/', UserController.createNewUser);

router.patch('/:idUser', UserController.updateNewUser);

router.delete('/:idUser', UserController.deleteUser);

module.exports = router;