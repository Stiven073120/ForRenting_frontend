import { Component, OnInit } from '@angular/core';
import { ModeloMensajeContactenos } from 'src/app/modelos/mensaje-contactenos.modelo';
import { MensajeContactenosService } from 'src/app/servicios/mensaje-contactenos.service';

@Component({
  selector: 'app-mensajes-contactenos',
  templateUrl: './mensajes-contactenos.component.html',
  styleUrls: ['./mensajes-contactenos.component.css']
})
export class MensajesContactenosComponent implements OnInit {

  listaMensajes: ModeloMensajeContactenos[] = [];

  constructor(private mensajeContactenosServicio: MensajeContactenosService) { }

  ngOnInit(): void {
    this.ObtenerlistaMensaje();
  }

  ObtenerlistaMensaje(){
    this.mensajeContactenosServicio.MostrarMensaje().subscribe((datos: ModeloMensajeContactenos[])=>{
      this.listaMensajes = datos;
    },(error: any)=>{

    })
  }
}
