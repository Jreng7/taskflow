import { z } from 'zod'

const taskSchema = z.object({
  id: z.string().uuid(),
  title
})