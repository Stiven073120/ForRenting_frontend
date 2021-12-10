import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesor/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './asesor/eliminar-asesor/eliminar-asesor.component';
import { MostrarAsesorComponent } from './asesor/mostrar-asesor/mostrar-asesor.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministrarSedesComponent } from './sedes/administrar-sedes/administrar-sedes.component';


@NgModule({
  declarations: [
    CrearAsesorComponent,
    EditarAsesorComponent,
    EliminarAsesorComponent,
    MostrarAsesorComponent,
    AdministrarSedesComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministradorModule { }
