import { z } from 'zod';

const taskSchema = z.object({
  name: z.string().min(1).max(30).trim(),
  status: z.boolean(),
});

export { taskSchema };
