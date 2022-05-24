import Paleta from '../models/paletas.model';

class PaletasServices {
  async listarTodas() {
    const paletas = await Paleta.find();

    if (paletas.length === 0) {
      throw { status: 404, message: 'Nenhuma paleta encontrada' };
    }

    return paletas;
  }

  async listarUmaPaletaPorId({ id }) {
    const paletaSelecionada = await Paleta.findById(id).exec();

    return paletaSelecionada;
  }

  async criarNovaPaleta({ sabor, descricao, foto, preco }) {
    const novaPaleta = {
      sabor,
      descricao,
      foto,
      preco,
    };

    const paleta = await Paleta.create(novaPaleta);

    return paleta;
  }

  async atualizarPaleta({ sabor, descricao, foto, preco, id }) {
    const paletaAtualizada = {
      sabor,
      descricao,
      foto,
      preco,
    };

    await Paleta.updateOne({ _id: id }, paletaAtualizada);

    const paleta = await Paleta.findById(id);

    return paleta;
  }

  async excluirPaleta({ id }) {
    const paleta = await Paleta.findByIdAndDelete(id);

    return paleta;
  }
}

export default PaletasServices;
