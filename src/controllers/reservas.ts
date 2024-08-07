import { Request, Response } from 'express';

import ReservaModel from '../models/reservas';

const reservasController = {
	// Obtener todas las reservas
	getAll: async (_req: Request, res: Response) => {
		const allReservas = await ReservaModel.find({});
		return res.status(200).json({
			status: 200,
			total: allReservas.length,
			data: allReservas,
		});
	},

	//Crear una reserva
	create: async (req: Request, res: Response) => {
		try {
			const newReseva = new ReservaModel({ ...req.body });
			const reserva = await newReseva.save();
			if (reserva) {
				return res.status(201).json({
					message: 'Reserva creada exitosamente.',
					status: 201,
					data: reserva,
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

	//Obtener una reserva por id
	getById: async (_req: Request, res: Response) => {
		try {
			const id = _req.params.id
			const idReserva = await ReservaModel.findById(id);
			return res.status(200).json({
				status: 200,
				data: idReserva,
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

	//Borrar una reserva por id
	delete: async (_req: Request, res: Response) => {
		try {
			const id = _req.params.id
			const deleteReserva = await ReservaModel.findByIdAndDelete(id);
			return res.status(200).json({
				status: 200,
				data: deleteReserva,
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

	//Modificar una reserva por id
	update: async (_req: Request, res: Response) => {
		try {
			const id = _req.params.id
			const data = _req.body
			const updateReserva = await ReservaModel.findByIdAndUpdate(id, data, { new: true });
			return res.status(200).json({
				status: 200,
				data: updateReserva,
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

export default reservasController;