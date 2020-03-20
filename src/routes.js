const express = require('express');
const UserController = require('./controller/UserController');
const DataUserController = require('./controller/DataUserController');
const routes = express.Router();

routes.get('/users/:id/', UserController.getUserById);
routes.get('/users/', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/data', DataUserController.index);
routes.post('/users/:user_id/data', DataUserController.store);

module.exports = routes;
