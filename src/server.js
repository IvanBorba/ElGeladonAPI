import 'dotenv/config';
import app from './app.js';
import { conectarAoDatabase } from './database/index.js';

const port = process.env.PORT || 8080;

app.listen(port, () => {
  conectarAoDatabase();
  if (!process.env.PORT) {
    console.log(`A aplicação está rodando na porta http://localhost:${port}`);
  }
});
