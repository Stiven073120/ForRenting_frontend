import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarVehiculoComponent } from '../asesor/vehiculos/editar-vehiculo/editar-vehiculo.component';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesor/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './asesor/eliminar-asesor/eliminar-asesor.component';
import { MostrarAsesorComponent } from './asesor/mostrar-asesor/mostrar-asesor.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { MostrarClienteComponent } from './cliente/mostrar-cliente/mostrar-cliente.component';
import { MensajesContactenosComponent } from './mensajes-contactenos/mensajes-contactenos.component';
import { AdministrarSedesComponent } from './sedes/administrar-sedes/administrar-sedes.component';

const routes: Routes = [
  {
    path: 'crear-asesor',
    component: CrearAsesorComponent
  },
  {
    path: 'editar-asesor/:id',
    component: EditarAsesorComponent
  },
  {
    path: 'mostrar-asesor',
    component: MostrarAsesorComponent
  },
  {
    path: 'eliminar-asesor/:id',
    component: EliminarAsesorComponent
  },
  {
    path: 'administrar-sedes',
    component: AdministrarSedesComponent
  },
  {
    path: 'mensajes-contactenos',
    component: MensajesContactenosComponent
  },
  {
    path: 'mostrar-cliente',
    component: MostrarClienteComponent
  },
  {
    path: 'editar-cliente/:id',
    component: EditarClienteComponent
  },
  {
    path: 'eliminar-cliente/:id',
    component: EliminarClienteComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
