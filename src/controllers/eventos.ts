import { Request, Response } from 'express';

import EventoModel from '../models/eventos';

const eventosController = {
	// Obtener todos los eventos
	getAll: async (_req: Request, res: Response) => {
		const allEventos = await EventoModel.find({});
		return res.status(200).json({
			status: 200,
			total: allEventos.length,
			data: allEventos,
		});
	},

	//Crear un evento
	create: async (req: Request, res: Response) => {
		try {
			const newEvento = new EventoModel({ ...req.body });
			const evento = await newEvento.save();
			if (evento) {
				return res.status(201).json({
					message: 'Evento creado exitosamente.',
					status: 201,
					data: evento,
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

	//Obtener un evento por id
	getById: async (_req: Request, res: Response) => {
		try {
			const id = _req.params.id
			const idEvento = await EventoModel.findById(id);
			return res.status(200).json({
				status: 200,
				data: idEvento,
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

	//Borrar un evento por id
	delete: async (_req: Request, res: Response) => {
		try {
			const id = _req.params.id
			const deleteEvento = await EventoModel.findByIdAndDelete(id);
			return res.status(200).json({
				status: 200,
				data: deleteEvento,
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

	//Modificar un evento por id
	update: async (_req: Request, res: Response) => {
		try {
			const id = _req.params.id
			const data = _req.body
			const updateEvento = await EventoModel.findByIdAndUpdate(id, data, { new: true });
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

export default eventosController;