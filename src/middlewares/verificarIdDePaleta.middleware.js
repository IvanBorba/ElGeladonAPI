import paletas from '../database';

const verificarIdDePaletaMiddleware = (request, response, next) => {
  const id = +request.params.id;

  const paleta = paletas.find((elem) => elem.id === id);

  if (!paleta) {
    return response.status(404).send('Paleta não encontrada!');
  }

  next();
};

export default verificarIdDePaletaMiddleware;
