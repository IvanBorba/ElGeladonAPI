import PaletasServices from '../services/paletas.service';

const paletasServices = new PaletasServices();

class PaletasControllers {
  listarTodas(request, response) {
    const paletas = paletasServices.listarTodas();

    response.send(paletas);
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
}

export default PaletasControllers;
