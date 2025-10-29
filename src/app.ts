import 'dotenv/config';
import express from 'express';
import usuariosRoutes from './routes/usuariosRoutes';
import cors from 'cors';
import { validateJson } from './middlewares';

const app = express();

app.use(cors());
app.use(express.json());

app.use(validateJson);
app.use('/api', usuariosRoutes);


app.use((req, res) => {
  res.status(404).json({
    code: 404,
    message: `NOT FOUND: ${req.originalUrl}`
  });
});


export default app;
