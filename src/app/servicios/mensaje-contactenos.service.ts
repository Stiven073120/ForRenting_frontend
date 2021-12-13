import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloAsesor } from '../modelos/asesor.modelo';
import { ModeloMensajeContactenos } from '../modelos/mensaje-contactenos.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class MensajeContactenosService {
 
  url = 'http://localhost:3000'
  token: string = "";

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }
  
  //Crear
  CrearMensaje(mensaje: ModeloMensajeContactenos): Observable<ModeloMensajeContactenos>{
    return this.http.post<ModeloMensajeContactenos>(`${this.url}/mensaje-contactenos`, mensaje, {
      headers: new HttpHeaders({
        'Autorization': `Bearer ${this.token}`
      })
    })
  }  

  //Mostrar
  MostrarMensaje(): Observable<ModeloMensajeContactenos[]>{
    return this.http.get<ModeloMensajeContactenos[]>(`${this.url}/mensaje-contactenos`)
  }
}