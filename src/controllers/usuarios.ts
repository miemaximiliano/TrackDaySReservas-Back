import { Request, Response } from 'express';
import UsuarioModel from '../models/usuarios';

const usuariosController = {
	// Obtener todos los eventos
	getAll: async (_req: Request, res: Response) => {
		const allUsuarios = await UsuarioModel.find({});
		return res.status(200).json({
			status: 200,
			total: allUsuarios.length,
			data: allUsuarios,
		});
	},

	//Crear un evento
	create: async (req: Request, res: Response) => {
		try {
			const newUsuario = new UsuarioModel({ ...req.body });
			const usuario = await newUsuario.save();
			if (usuario) {
				return res.status(201).json({
					message: 'Usuario creado exitosamente.',
					status: 201,
					data: usuario,
					error: false,
				});
			}
		} catch (error) {
			if (error instanceof Error) {
				return res.status(400).json({
					message: error.message,
					error: true,
				});
			}
		}
	},

	//Obtener un usuario por id
	getById: async (_req: Request, res: Response) => {
		try {
			const id = _req.params.id
			const idUsuario = await UsuarioModel.findById(id);
			return res.status(200).json({
				status: 200,
				data: idUsuario,
			});
		} catch (error) {
			if (error instanceof Error) {
				return res.status(204).json({
					message: error.message,
					error: true,
				});
			}
		}
	},

	//Obtener un usuario por email
	getByEmail: async (_req: Request, res: Response) => {
		try {
			const email = _req.params.email
			const emailUsuario = await UsuarioModel.findOne({ email: email });
			return res.status(200).json({
				status: 200,
				data: emailUsuario,
			});
		} catch (error) {
			if (error instanceof Error) {
				return res.status(204).json({
					message: error.message,
					error: true,
				});
			}
		}
	},

	//Borrar un usuario por id
	delete: async (_req: Request, res: Response) => {
		try {
			const id = _req.params.id
			const deleteUsuario = await UsuarioModel.findByIdAndDelete(id);
			return res.status(200).json({
				status: 200,
				data: deleteUsuario,
			});
		} catch (error) {
			if (error instanceof Error) {
				return res.status(204).json({
					message: error.message,
					error: true,
				});
			}
		}
	},

	//Modificar un usuario por id
	update: async (_req: Request, res: Response) => {
		try {
			const id = _req.params.id
			const data = _req.body
			const updateEvento = await UsuarioModel.findByIdAndUpdate(id, data, { new: true });
			return res.status(200).json({
				status: 200,
				data: updateEvento,
			});
		} catch (error) {
			if (error instanceof Error) {
				return res.status(204).json({
					message: error.message,
					error: true,
				});
			}
		}
	},
};

export default usuariosController;