import { Router } from 'express';
import PaletasControllers from '../controllers/paletas.controllers';

const paletasRouter = Router();
const paletasControllers = new PaletasControllers();

paletasRouter.get('/listar-todas', paletasControllers.listarTodas);
paletasRouter.get('/paleta/:id', paletasControllers.listarUmaPaletaPorId);
paletasRouter.post('/criar-paleta', paletasControllers.criarNovaPaleta);

export default paletasRouter;
