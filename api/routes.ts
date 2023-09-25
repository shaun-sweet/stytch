import express from 'express';
import * as usersController from './controllers/users.controller.ts';

const routes = express.Router();

routes.get('/users', usersController.getAllUsers);
routes.get('/user/:userId', usersController.getUser);

export default routes;
