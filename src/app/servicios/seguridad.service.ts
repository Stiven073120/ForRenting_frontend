import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://localhost:3000';

  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());

  constructor(private http: HttpClient) { 
    this.VerificarSesionActual();
  }
  
  IdentificarAdministrador(usuario: string, clave: string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarAdministrador`, {
      usuario: usuario,
      clave: clave
    },{
  headers: new HttpHeaders({

      })
    })    
  }

  IdentificarAsesor(usuario: string, clave: string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarAsesor`, {
      usuario: usuario,
      clave: clave
    },{
  headers: new HttpHeaders({

      })
    })    
  }

  IdentificarCliente(usuario: string, clave: string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarCliente`, {
      usuario: usuario,
      clave: clave
    },{
  headers: new HttpHeaders({

      })
    })    
  }

  AlmacenarSesionAdministrador(datos: ModeloIdentificar){
    datos.seInicioSesionAdministrador = true;
    datos.seInicioSesion = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  AlmacenarSesionAsesor(datos: ModeloIdentificar){
    datos.seInicioSesionAsesor = true;
    datos.seInicioSesion = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  AlmacenarSesionCliente(datos: ModeloIdentificar){
    datos.seInicioSesionCliente = true;
    datos.seInicioSesion = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerSesion(){
    let datosString = localStorage.getItem("dotosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }
  }

  EliminarSesion(){
    localStorage.removeItem("datosSesion")
    this.RefrescarDatosSesion(new ModeloIdentificar());
  }

  RefrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuarioEnSesion.next(datos)
  }

  SeHaIniciadoSesion(){
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }

  ObtenerDatosUsuarioEnSesion(){
    return this.datosUsuarioEnSesion.asObservable();
  }

  VerificarSesionActual(){
    let datos = this.ObtenerSesion();
    if(datos){
      this.RefrescarDatosSesion(datos);
    }
  }

  

}


