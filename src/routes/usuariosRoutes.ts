import { Router } from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/usuariosController'
import { validateId } from '../middlewares';

const usersRouter = Router();

usersRouter.get('/users/', getUsers);
usersRouter.get('/users/:id', validateId, getUserById);
usersRouter.post('/users/', createUser);
usersRouter.put('/users/:id', validateId, updateUser);
usersRouter.delete('/users/:id', validateId, deleteUser);


export default usersRouter;
