import { Router } from 'express';
import usuariosController from '../controllers/usuarios';

const usuariosRouter = Router();

//GET - http://localhost/usuarios
usuariosRouter.get('/', usuariosController.getAll);

//POST - http://localhost/usuarios
usuariosRouter.post('/', usuariosController.create);

//GET - http://localhost/usuarios/:email
usuariosRouter.get('/email/:email', usuariosController.getByEmail);

//GET - http://localhost/usuarios/:id
usuariosRouter.get('/:id', usuariosController.getById);

//DELETE - http://localhost/usuarios/:id
usuariosRouter.delete('/:id', usuariosController.delete);

//PUT - http://localhost/usuarios/:id
usuariosRouter.put('/:id', usuariosController.update);

export default usuariosRouter;