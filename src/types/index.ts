export interface EventoData {
	nombre: string;
	Numero: string;
	descripcion: string;
	fecha: string;
	hora: string;
	createdAt: Date;
	deletedAt: Date;
}

export interface UsuarioData {
	nombre: string;
	apellido: string;
	fechaNacimiento: Date;
	DNI: string;
	tel: string;
	email: string;
}

export interface ReservaData {
	idUsuario: string;
	idEvento: string;
	nombre: string;
	fecha: string;
	sede: string;
	zona: string;
	cantidad: number;
}