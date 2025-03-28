import { taskSchema } from '../schema/todo';

class TodoController {
  async index(req, res) {}

  async create(req, res) {
    const { id, name, status } = taskSchema.parse(req.body);
  }
}

export default new TodoController();
