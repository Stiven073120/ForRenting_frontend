import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';
import { ModeloDatos } from 'src/app/modelos/datos.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-crear-asesor',
  templateUrl: './crear-asesor.component.html',
  styleUrls: ['./crear-asesor.component.css']
})
export class CrearAsesorComponent implements OnInit {

  role: string = "Asesor";

  fgValidador: FormGroup = this.fb.group({
    'codigo_asesor':['',[Validators.required]],
    'nombre':['',[Validators.required]],
    'apellido':['',[Validators.required]],
    'correo':['',[Validators.required, Validators.email]],
    'tipo_doc':['',[Validators.required]],
    'numero_doc':['',[Validators.required]],
    'descripcion':['',[Validators.required]],
    'direccion':['',[Validators.required]],
    'telefono':['',[Validators.required]]
  })

  constructor(private fb: FormBuilder, private router: Router, private asesorServicio: AsesorService) { }

  ngOnInit(): void {
  }

  GuardarAsesor(){
    let codigo_asesor = this.fgValidador.controls["codigo_asesor"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let tipo_doc = this.fgValidador.controls["tipo_doc"].value;
    let numero_doc = this.fgValidador.controls["numero_doc"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let role = this.role;
    let asesor = new ModeloAsesor();
    asesor.codigo_asesor = codigo_asesor;
    asesor.nombre = nombre;
    asesor.apellido = apellido;
    asesor.correo = correo;
    asesor.tipo_doc = tipo_doc;
    asesor.numero_doc = numero_doc;
    asesor.descripcion = descripcion;
    asesor.direccion = direccion;
    asesor.telefono = telefono;
    asesor.role = role;
    this.asesorServicio.CrearAsesor(asesor).subscribe((datos: ModeloAsesor) => {
      alert("Se creo el asesro correctamente");
      this.router.navigate(['/administrador/mostrar-asesor'])
    },(error: any) => {
      alert("error al crear asesor");
    })

  }

}
