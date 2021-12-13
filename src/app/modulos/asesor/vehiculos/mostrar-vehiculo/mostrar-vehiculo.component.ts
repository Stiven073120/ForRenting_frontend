import { Component, OnInit } from '@angular/core';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-mostrar-vehiculo',
  templateUrl: './mostrar-vehiculo.component.html',
  styleUrls: ['./mostrar-vehiculo.component.css']
})
export class MostrarVehiculoComponent implements OnInit {

  listaVehiculo: ModeloVehiculo[] = []

  constructor(private vehiculoServicio: VehiculoService) { }

  ngOnInit(): void {
    this.ObtenerlistaVehiculos();
  }

  ObtenerlistaVehiculos(){
    this.vehiculoServicio.MostrarVehiculo().subscribe((datos: ModeloVehiculo[])=>{
      this.listaVehiculo = datos;
    }) 
  }
}
