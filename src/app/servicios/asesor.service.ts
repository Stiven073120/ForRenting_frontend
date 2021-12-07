import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloAsesor } from '../modelos/asesor.modelo';
import { ModeloDatos } from '../modelos/datos.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {

  url = 'http://localhost:3000'
  token: string = "";

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }
  
  //Crear
  CrearAsesor(asesor: ModeloAsesor): Observable<ModeloAsesor>{
    return this.http.post<ModeloAsesor>(`${this.url}/asesors`, asesor, {
      headers: new HttpHeaders({
        'Autorization': `Bearer ${this.token}`
      })
    })
  }  

  //Mostrar
  MostrarAsesor(): Observable<ModeloAsesor[]>{
    return this.http.get<ModeloAsesor[]>(`${this.url}/asesors`)
  }

  //Mostrar/Obtener por Id
  ObtenerAsesorPorId(id: string): Observable<ModeloAsesor>{
    return this.http.get<ModeloAsesor>(`${this.url}/asesors/${id}`)
  }

  //Editar
  EditarAsesor(asesor: ModeloAsesor): Observable<ModeloAsesor>{
    return this.http.put<ModeloAsesor>(`${this.url}/asesors/${asesor.id}`, asesor, {
      headers: new HttpHeaders({
        'Autorization': `Bearer ${this.token}`
      })
    })
  }

  //Eliminar
  EliminarAsesor(id: string): Observable<any>{
    return this.http.delete(`${this.url}/asesor/${id}`, {
      headers: new HttpHeaders({
        'Autorization':`Beares ${this.token}`
      })
    })
  }


}
