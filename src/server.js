import app from './app';

const port = 3000;

app.listen(port, () => {
  console.log(`A aplicação está rodando na porta http://localhost:${port}`);
});
