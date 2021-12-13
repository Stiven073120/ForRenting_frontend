import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearVehiculoComponent } from './vehiculos/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculos/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculos/eliminar-vehiculo/eliminar-vehiculo.component';
import { MostrarVehiculoComponent } from './vehiculos/mostrar-vehiculo/mostrar-vehiculo.component';

const routes: Routes = [
  {
    path:"mostrar-vehiculo",
    component: MostrarVehiculoComponent
  },
  {
    path:"editar-vehiculo/:id",
    component: EditarVehiculoComponent
  },
  {
    path:"eliminar-vehiculo/:id",
    component: EliminarVehiculoComponent
  },
  {
    path:"crear-vehiculo",
    component: CrearVehiculoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
