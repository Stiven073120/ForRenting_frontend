import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { 

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
}

