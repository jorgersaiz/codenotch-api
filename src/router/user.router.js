const { Router } = require('express');
const router = Router();
const userController = require('../controller/user.controller')

router.get('/', userController.welcome);

router.get('/user', userController.getUser);

router.get('/user/:name', userController.getUserParams);

router.get('/userByQuery', userController.getUserQuery);

router.post('/user', userController.createUser);

router.put('/user', userController.updateUser);

router.delete('/user', userController.deleteUser);

module.exports = router;