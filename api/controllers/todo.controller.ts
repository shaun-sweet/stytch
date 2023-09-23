import { NextFunction, Request, Response } from 'express';
import * as todoService from '@/services/todo.service';

export const getAllTodos = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await todoService.listAll();
    res.json({ todos });
    next();
  } catch (e) {
    res.sendStatus(500) && next(e);
  }
};
