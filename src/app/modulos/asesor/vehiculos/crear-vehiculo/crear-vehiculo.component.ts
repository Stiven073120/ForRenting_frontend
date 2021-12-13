import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    "nombre":['',[Validators.required]],
    "descripcion":['',[Validators.required]],
    "direccion":['',[Validators.required]],
    "valor":['',[Validators.required]],
    "fotografia":['',[Validators.required]],
  })

  constructor(private fb: FormBuilder, private vehiculoServicio: VehiculoService, private router: Router) { }

  ngOnInit(): void {
  }

  GuardarVehiculo(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let valor = parseInt(this.fgValidador.controls["valor"].value);
    let fotografia = this.fgValidador.controls["fotografia"].value;
    let vehiculo = new ModeloVehiculo();
    vehiculo.nombre = nombre;
    vehiculo.descripcion = descripcion;
    vehiculo.direccion = direccion;
    vehiculo.valor = valor;
    vehiculo.fotografia = fotografia;
    this.vehiculoServicio.CrearVehiculo(vehiculo).subscribe((datos: ModeloVehiculo)=>{
      alert("Se creo el vehiculo correctamente");
      this.router.navigate(['/asesor/mostrar-vehiculo'])
    },(error: any)=>{
      alert("error al crear vehiculo");
    })
  }
}
