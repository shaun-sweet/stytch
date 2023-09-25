import { Users } from '../db/users.ts';

export const getAllUsers = async () => {
  return Users;
};

export const getUser = async (id: string) => {
  return Users.find((user) => user.id === id) || {};
};
