import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-eliminar-vehiculo',
  templateUrl: './eliminar-vehiculo.component.html',
  styleUrls: ['./eliminar-vehiculo.component.css']
})
export class EliminarVehiculoComponent implements OnInit {

  id: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private vehiculoServicio: VehiculoService) { }

  ngOnInit(): void {
    this.router.navigate(['/asesor/mostrar-vehiculo'])
    this.id = this.route.snapshot.params["id"];
    this.EliminarVehiculo();
    
  }

  EliminarVehiculo(){
    let id = this.id;
    this.vehiculoServicio.EliminarVehiculo(id).subscribe((datos: ModeloVehiculo)=>{
      alert(`Se elimino correctamente el vehiculo`)
    },(error: any)=>{
      alert(`error al eliminar vehiculo`)
    })
  }
}

