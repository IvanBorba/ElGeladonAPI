import express from 'express';
import cors from 'cors';
import paletasRouter from './routes/paletas.routes';

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  return response.send('Hello World');
});

app.use('/paletas', paletasRouter);

app.listen(port, () => {
  console.log(`A aplicação está rodando na porta http://localhost:${port}`);
});
