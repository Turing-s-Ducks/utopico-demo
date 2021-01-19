import { Injectable } from '@angular/core';
@Injectable()

export class variablesGlobales {
	//variables globales
	datosUsuario : object = [];
	tipo : string = "";
	prueba : string = "1";
	codigoBarras : string = "PRUEBAS";
    sesionActiva : boolean;
    consultaServicios: object = [
		{ 	
			nombre: "[Seleccione una opcion]",
			codigo: ""
		},
    ];
    objetoPruebaLogin: object  = [
		{
			"prueba": 1,
			"token" : "iajdklajksaldj9hadashdasdajsd",
			"nombre": "Prueba1"
		}
	];
}