import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloDatos } from 'src/app/modelos/datos.modelo';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  seInicioSesionAdministrador: boolean = false;
  seInicioSesionAsesor: boolean = false;
  seInicioSesionCliente: boolean = false;
  seInicioSesion: boolean = false;

  subs: Subscription = new Subscription();

  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificar) => {
      this.seInicioSesionAdministrador = datos.seInicioSesionAdministrador
      this.seInicioSesionAsesor = datos.seInicioSesionAsesor;
      this.seInicioSesionCliente = datos.seInicioSesionCliente;
      this.seInicioSesion = datos.seInicioSesion;
    })
  }

}
