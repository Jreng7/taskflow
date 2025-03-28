import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { router } from './routes/index.routes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(router)

app.get('/', (req, res) => {
  res.status(200).json({ message: "server running"})
})

export default app;