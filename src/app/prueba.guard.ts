import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { ModeloDatos } from './modelos/datos.modelo';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PruebaGuard implements CanActivate {

  seInicioSesion: boolean = false;
  subs: Subscription = new Subscription();

  constructor(private servicioSeguridad: SeguridadService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.subs = this.servicioSeguridad.ObtenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificar) => {
      this.seInicioSesion = datos.seInicioSesion;
    })
    if (!this.seInicioSesion) {
      return this.router.navigate(['/seguridad/identificacion']).then(() => false);
    }
    return true;
  }
}
