import express from 'express';
import * as todoController from '@/controllers/todo.controller';

export const router = express.Router();

router.get('/todos', todoController.getAllTodos);
