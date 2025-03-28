import { taskSchema } from '../schema/todo.js';
import { prisma } from '../lib/prisma.js';

class TodoController {
  async index(req, res) {
    try {
      const tasks = await prisma.todo.findMany();
      return res.status(200).json(tasks);
    } catch (err) {
      console.error('Erro no banco de dados:', err);
      return res.status(500).json({ error: 'Erro interno ao buscar tarefa.' });
    }
  }

  async create(req, res) {
    try {
      const { name, status } = taskSchema.parse(req.body);
      const task = await prisma.todo.create({
        data: {
          name,
          status: status ?? false,
        },
      });
      return res.status(201).json(task);
    } catch (error) {
      console.error('Erro no banco de dados:', err);
      return res.status(500).json({ error: 'Erro interno ao criar tarefa.' });
    }
  }
}

export default new TodoController();
