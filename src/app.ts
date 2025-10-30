import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { validateJson } from './middlewares';
import { indexRouter } from './routes/indexRouter';

const app = express();

app.use(cors());
app.use(express.json());

app.use(validateJson);
app.use(indexRouter);


app.use((req, res) => {
  res.status(404).json({
    code: 404,
    message: `NOT FOUND: ${req.originalUrl}`
  });
});


export default app;
