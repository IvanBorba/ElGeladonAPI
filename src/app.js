import paletasRouter from './routes/paletas.routes.js';
// Importou as novas rotas
import usuariosRouter from './routes/usuarios.routes.js';
import loginRouter from './routes/login.routes.js';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  return response.send('Hello World');
});

app.use('/paletas', paletasRouter);
// Aplicou as novas rotas
app.use('/usuarios', usuariosRouter);
app.use('/login', loginRouter);

export default app;
