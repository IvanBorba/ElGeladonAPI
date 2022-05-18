import paletas from '../database';

class PaletasServices {
  listarTodas() {
    return paletas;
  }

  listarUmaPaletaPorId({ id }) {
    const paletaSelecionada = paletas.find((elem) => elem.id === id);

    return paletaSelecionada;
  }

  criarNovaPaleta({ sabor, descricao, foto, preco }) {
    const novaPaleta = {
      id: paletas.length + 1,
      sabor,
      descricao,
      foto,
      preco,
    };

    paletas.push(novaPaleta);

    return novaPaleta;
  }
}

export default PaletasServices;

// {
//   id: 1,
//   sabor: 'Açaí com Leite Condensado',
//   descricao:
//     'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
//   foto: 'assets/images/acai-com-leite-condensado.png',
//   preco: 10.0,
// }
