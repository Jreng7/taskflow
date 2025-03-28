class TodoController {
  async index(req, res) {
    
  }

  async create(req, res) {
    const { name } = req.body;
  }
}

export default new TodoController();
