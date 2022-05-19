import PaletasServices from '../services/paletas.service';

const paletasServices = new PaletasServices();

class PaletasControllers {
  listarTodas(request, response) {
    try {
      const paletas = paletasServices.listarTodas();

      response.send(paletas);
    } catch (error) {
      response.status(error.status).send(error.message);
    }
  }

  listarUmaPaletaPorId(request, response) {
    const id = +request.params.id;

    const paleta = paletasServices.listarUmaPaletaPorId({ id });

    response.send(paleta);
  }

  criarNovaPaleta(request, response) {
    const { sabor, descricao, foto, preco } = request.body;

    const novaPaleta = paletasServices.criarNovaPaleta({
      sabor,
      descricao,
      preco,
      foto,
    });

    response.status(201).send(novaPaleta);
  }

  atualizarPaleta(request, response) {
    const { sabor, descricao, foto, preco } = request.body;
    const id = +request.params.id;

    const paletaAtualizada = paletasServices.atualizarPaleta({
      sabor,
      descricao,
      foto,
      preco,
      id,
    });

    response.send(paletaAtualizada);
  }

  excluirPaleta(request, response) {
    const id = +request.params.id;

    paletasServices.excluirPaleta(id);

    response.sendStatus(204);
  }
}

export default PaletasControllers;
