import { Router } from 'express';
import eventosController from '../controllers/eventos';

const eventosRouter = Router();

//GET - http://localhost/eventos
eventosRouter.get('/', eventosController.getAll);

//POST - http://localhost/eventos
eventosRouter.post('/', eventosController.create);

//GET - http://localhost/eventos/:id
eventosRouter.get('/:id', eventosController.getById);

//DELETE - http://localhost/eventos/:id
eventosRouter.delete('/:id', eventosController.delete);

//PUT - http://localhost/eventos/:id
eventosRouter.put('/:id', eventosController.update);

export default eventosRouter;