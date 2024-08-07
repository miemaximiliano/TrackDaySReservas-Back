import { model, Schema } from 'mongoose';
import { ReservaData } from '../types';

const reservaSchema = new Schema({
	idUsuario: {
		type: String,
		required: true,
	},
	idEvento: {
		type: String,
		required: true,
	},
	nombre: {
		type: String,
		required: true,
	},
	fecha: {
		type: String,
		required: true,
	},
	sede: {
		type: String,
		required: true,
	},
	zona: {
		type: String,
		required: true,
	},
	cantidad: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		default: new Date(),
		required: false,
	},
	deletedAt: {
		type: Date,
		required: false,
	},
});

export default model<ReservaData>('Reserva', reservaSchema);