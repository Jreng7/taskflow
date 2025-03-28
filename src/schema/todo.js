import { z } from 'zod';

const taskSchema = z.object({
  name: z.string().min(1).max(30).trim()
});


export { taskSchema };


