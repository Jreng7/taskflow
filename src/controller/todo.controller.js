import { taskSchema } from '../schema/todo.js';
import { prisma } from '../lib/prisma.js';

class TodoController {

  async index(req, res) {
    try {
      const tasks = await prisma.todo.findMany();

      if(!tasks){
        return res.status(404).json({ message: 'Task not found'})
      }

      return res.status(200).json(tasks);
    } catch (err) {
      console.error('Erro no banco de dados:', err);
      return res.status(500).json({ error: 'Erro interno ao buscar tarefa.' });
    }
  }

  async create(req, res) {
    try {
      const { name } = taskSchema.parse(req.body);
      const task = await prisma.todo.create({
        data: {
          name
        },
      });
      return res.status(201).json(task);
    } catch (error) {
      console.error('Erro no banco de dados:', err);
      return res.status(500).json({ error: 'Erro interno ao criar tarefa.' });
    }
  }

  async update(req, res) {
    const { id } = req.params
    const { name, status } = taskSchema.parse(req.body)
  }
}

export default new TodoController();
