import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesor/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './asesor/eliminar-asesor/eliminar-asesor.component';
import { MostrarAsesorComponent } from './asesor/mostrar-asesor/mostrar-asesor.component';

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
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
