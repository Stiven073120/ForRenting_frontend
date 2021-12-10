import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './plantilla/acerca-de/acerca-de.component';
import { ContactenosComponent } from './plantilla/contactenos/contactenos.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path: "acerca-de",
    component: AcercaDeComponent
  },
  {
    path: "contactenos",
    component: ContactenosComponent
  },
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: "seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)  
  },
  {
    path: "administracion",
    loadChildren: () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)  
  },
  {
    path: "pedidos",
    loadChildren: () => import("./modulos/pedidos/pedidos.module").then(x => x.PedidosModule)  
  },
  {
    path: "administrador",
    loadChildren: () => import("./modulos/administrador/administrador.module").then(x => x.AdministradorModule)  
  },
  {
    path: "asesor",
    loadChildren: () => import("./modulos/asesor/asesor.module").then(x => x.AsesorModule)  
  },
  {
    path: "cliente",
    loadChildren: () => import("./modulos/cliente/cliente.module").then(x => x.ClienteModule)  
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
