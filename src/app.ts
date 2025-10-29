import 'dotenv/config';
import express from 'express';
import usuariosRoutes from './routes/usuariosRoutes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/usuarios', usuariosRoutes);


export default app;
