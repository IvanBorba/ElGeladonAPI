import mongoose from 'mongoose';

const { connect } = mongoose;

export const conectarAoDatabase = () => {
  connect(
    'mongodb+srv://ivan:101112@cluster0.raxz2.mongodb.net/elgeladon_db?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
    .then(() => {
      console.log('MongoDB Conectado');
    })
    .catch((err) => {
      console.log(`Erro na conexão com o MongoDB: ${err}`);
    });
};
