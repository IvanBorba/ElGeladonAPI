import 'dotenv/config';
import app from './app';
import { conectarAoDatabase } from './database';

app.listen(process.env.PORT, () => {
  conectarAoDatabase();
  console.log(
    `A aplicação está rodando na porta http://localhost:${process.env.PORT}`,
  );
});
