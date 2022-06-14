import { Router } from 'express';
import UsuariosControllers from '../controllers/usuarios.controllers.js';
import verificarDadosDoUsuarioMiddleware from '../middlewares/verificarDadosDoUsuario.middleware.js';
import verificarIdDoUsuario from '../middlewares/verificarIdDoUsuario.middleware.js';
import verificarTokenMiddleware from '../middlewares/verificarToken.middleware.js';

const usuariosRouter = Router();
const usuariosControllers = new UsuariosControllers();

usuariosRouter.get('', usuariosControllers.listarTodos);
usuariosRouter.get(
  '/:id',
  verificarIdDoUsuario,
  usuariosControllers.listarPorId,
);
usuariosRouter.post(
  '/criar-usuario',
  verificarDadosDoUsuarioMiddleware,
  usuariosControllers.criarNovoUsuario,
);
usuariosRouter.put(
  '/atualizar-usuario/:id',
  verificarTokenMiddleware,
  verificarIdDoUsuario,
  verificarDadosDoUsuarioMiddleware,
  usuariosControllers.atualizarUsuario,
);
usuariosRouter.delete(
  '/excluir-usuario/:id',
  verificarTokenMiddleware,
  verificarIdDoUsuario,
  usuariosControllers.excluirUsuario,
);

export default usuariosRouter;
