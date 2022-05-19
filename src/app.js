import paletasRouter from './routes/paletas.routes';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  return response.send('Hello World');
});

app.use('/paletas', paletasRouter);

export default app;
