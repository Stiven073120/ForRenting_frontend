import { ModeloDatos } from "./datos.modelo";

export class ModeloIdentificar{
    datos?: ModeloDatos;
    tk?: string;
    seInicioSesionAdministrador: boolean = false;
    seInicioSesionAsesor: boolean = false;
    seInicioSesionCliente: boolean = false;
    seInicioSesion: boolean = false;
}