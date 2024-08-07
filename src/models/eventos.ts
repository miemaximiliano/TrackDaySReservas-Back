import { model, Schema } from 'mongoose';
import { EventoData } from '../types';

const eventoSchema = new Schema({
	nombre: {
		type: String,
		required: true,
	},
	Numero: {
		type: String,
		required: true,
	},
	descripcion: {
		type: String,
		required: true,
	},
	fecha: {
		type: String,
		required: true,
	},
	hora: {
		type: String,
		required: true,
	},
	sede: {
		type: String,
		required: true,
	},
	maxEntradas: {
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

export default model<EventoData>('Evento', eventoSchema);