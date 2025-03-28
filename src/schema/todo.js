import { z } from 'zod';

const taskSchema = z.object({
  id: z.number().int(),
  name: z.string().min(1),
  status: z.boolean(),
});

export { taskSchema };
