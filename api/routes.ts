import express from 'express';
import * as todoController from './controllers/todo.controller.ts';

const routes = express.Router();

routes.get('/todos', todoController.getAllTodos);

export default routes;
