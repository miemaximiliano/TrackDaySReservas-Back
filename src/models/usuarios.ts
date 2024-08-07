import { model, Schema } from 'mongoose';
import { UsuarioData } from '../types';

const usuarioSchema = new Schema({
	nombre: {
		type: String,
		required: true,
	},
	apellido: {
		type: String,
		required: true,
	},
	fechaNacimiento: {
		type: Date,
		required: true,
	},
	DNI: {
		type: String,
		required: true,
	},
	tel: {
		type: String,
		required: false,
	},
	email: {
		type: String,
		required: true,
	},
	admin: {
		type: Boolean,
		required: false,
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

export default model<UsuarioData>('Usuario', usuarioSchema);