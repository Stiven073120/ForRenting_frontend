import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloAsesor } from '../modelos/asesor.modelo';
import { ModeloVehiculo } from '../modelos/vehiculo.modelo';
import { SeguridadService } from './seguridad.service';


@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  url = 'http://localhost:3000'
  token: string = "";

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }
  
  //Crear
  CrearVehiculo(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo>{
    return this.http.post<ModeloVehiculo>(`${this.url}/vehiculos`, vehiculo, {
      headers: new HttpHeaders({
        'Autorization': `Bearer ${this.token}`
      })
    })
  }  

  //Mostrar
  MostrarVehiculo(): Observable<ModeloVehiculo[]>{
    return this.http.get<ModeloVehiculo[]>(`${this.url}/vehiculos`)
  }

  //Mostrar/Obtener por Id
  ObtenerVehiculoPorId(id: string): Observable<ModeloVehiculo>{
    return this.http.get<ModeloVehiculo>(`${this.url}/vehiculos/${id}`)
  }

  //Editar
  EditarVehiculo(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo>{
    return this.http.put<ModeloVehiculo>(`${this.url}/vehiculos/${vehiculo.id}`, vehiculo, {
      headers: new HttpHeaders({
        'Autorization': `Bearer ${this.token}`
      })
    })
  }

  //Eliminar
  EliminarVehiculo(id: string): Observable<any>{
    return this.http.delete(`${this.url}/vehiculos/${id}`, {
      headers: new HttpHeaders({
        'Autorization':`Beares ${this.token}`
      })
    })
  }


}

