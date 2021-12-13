import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {

  id: string = '';
   
  fgValidador: FormGroup = this.fb.group({
    "id":['',[Validators.required]],
    "nombre":['',[Validators.required]],
    "descripcion":['',[Validators.required]],
    "direccion":['',[Validators.required]],
    "valor":['',[Validators.required]],
    "fotografia":['',[Validators.required]],
  })

  constructor(private fb: FormBuilder, private router: Router, private vehiculoServicio: VehiculoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarVehiculo();
  }

  BuscarVehiculo(){
    this.vehiculoServicio.ObtenerVehiculoPorId(this.id).subscribe((datos: ModeloVehiculo)=> {
      this.fgValidador.controls["id"].setValue(this.id)
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["valor"].setValue(datos.valor);
      this.fgValidador.controls["fotografia"].setValue(datos.fotografia);
    })
  }

  EditarVehiculo(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let valor = parseInt(this.fgValidador.controls["valor"].value);
    let fotografia = this.fgValidador.controls["fotografia"].value;
    let vehiculo = new ModeloVehiculo();
    vehiculo.id = this.id;
    vehiculo.nombre = nombre;
    vehiculo.descripcion = descripcion;
    vehiculo.direccion = direccion;
    vehiculo.valor = valor;
    vehiculo.fotografia = fotografia;
    this.vehiculoServicio.EditarVehiculo(vehiculo).subscribe((datos: ModeloVehiculo)=>{
      alert("Se edito el vehiculo correctamente");
      this.router.navigate(['/asesor/mostrar-vehiculo'])
    },(error: any)=>{
      alert("error al editar vehiculo");
    })
  }
}
