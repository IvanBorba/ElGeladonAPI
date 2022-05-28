import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Criamos o Schema que representa o Usuário
// Na linha do adm, colocamos a propriedade "default": false, para ele pegar por padrão false
// caso o adm não sejá enviado na requisição.
const UsuarioSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    adm: { type: Boolean, required: true, default: false },
  },
  { versionKey: false },
);

// O mongoose sempre colocará o nome das coleções no plural, por isso, se quiser colocar
// no singular, deve se passar um terceiro parametro pra função "model", com o nome da coleção
// no singular.
const Usuario = model('usuarios', UsuarioSchema);

export default Usuario;
