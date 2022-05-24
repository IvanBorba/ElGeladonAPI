import app from './app';
import { conectarAoDatabase } from './database';

const port = 3000;

app.listen(port, () => {
  conectarAoDatabase();
  console.log(`A aplicação está rodando na porta http://localhost:${port}`);
});
