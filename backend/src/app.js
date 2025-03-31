import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { router } from './routes/index.routes.js';

const app = express();

app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://fronend.vercel.app'
  ]
}));
app.use(helmet());
app.use(router)

export default app;