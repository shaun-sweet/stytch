import { NextFunction, Request, Response } from 'express';
import * as usersService from '../services/users.service.ts';

export const getAllUsers = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await usersService.getAllUsers();
    res.json({ users });
    next();
  } catch (e) {
    res.sendStatus(500) && next(e);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  try {
    const user = await usersService.getUser(userId);
    res.json({ user });
    next();
  } catch (e) {
    res.sendStatus(500) && next(e);
  }
};
