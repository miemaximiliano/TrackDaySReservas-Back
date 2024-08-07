import { Router } from 'express';
import reservasController from '../controllers/reservas';

const reservasRouter = Router();

//GET - http://localhost/reservas
reservasRouter.get('/', reservasController.getAll);

//POST - http://localhost/reservas
reservasRouter.post('/', reservasController.create);

//GET - http://localhost/reservas/:id
reservasRouter.get('/:id', reservasController.getById);

//DELETE - http://localhost/reservas/:id
reservasRouter.delete('/:id', reservasController.delete);

//PUT - http://localhost/reservas/:id
reservasRouter.put('/:id', reservasController.update);

export default reservasRouter;