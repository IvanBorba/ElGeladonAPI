const express = require('express');
const cors = require('cors');

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

app.get('/', (request, response) => {
  return response.send('Hello World');
});

app.get('/paletas/listar-todas', (request, response) => {
  return response.send(paletas);
});

app.get('/paletas/paleta/:id', (request, response) => {
  const id = Number(request.params.id);

  const paletaSelecionada = paletas.find((elem) => elem.id === id);

  if (paletaSelecionada === undefined) {
    return response.status(404).send('Paleta não encontrada');
  }

  return response.send(paletaSelecionada);
});

app.listen(port, () => {
  console.log(`A aplicação está rodando na porta http://localhost:${port}`);
});
