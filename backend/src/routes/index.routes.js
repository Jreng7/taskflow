import { Router } from 'express';
import { routerTodo } from './todo.routes.js';

export const router = Router();

router.use('/todo', routerTodo);
