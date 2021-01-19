export interface IniciarSesion {
	user: string;
	password: string;
}

export interface CerrarSesion {
	codigoServicio: string;
	usuario: string;
}

export interface SesionActiva {
	codigoServicio: string;
	usuario: string;
}

export interface CambioPassword {
	codigoServicio: string;
	usuarioId: string;
	contrasenaActual: string;
	confirmacionContrasena: string;
}