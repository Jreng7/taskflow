import { Router } from 'express';
import TodoController from '../controller/todo.controller.js';

export const routerTodo = Router();

routerTodo.get('/', TodoController.index);
routerTodo.post('/', TodoController.create);
routerTodo.put('/:id', TodoController.update);
