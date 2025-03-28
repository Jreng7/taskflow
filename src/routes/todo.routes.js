import { Router } from 'express';
import TodoController from '../controller/todo.controller.js';

export const routerTodo = Router();

routerTodo.post('/', TodoController.create);
