import { Router } from 'express';
import TodoController from '../controller/todo.controller';

export const routerTodo = Router();

routerTodo.post('/', TodoController.create);
