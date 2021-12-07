import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-editar-asesor',
  templateUrl: './editar-asesor.component.html',
  styleUrls: ['./editar-asesor.component.css']
})
export class EditarAsesorComponent implements OnInit {

  id: string = '';
  role: string = "Asesor";

  fgValidador: FormGroup = this.fb.group({
    'id':['',[Validators.required]],
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

  constructor(private fb: FormBuilder, private router: Router, private asesorServicio: AsesorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarAsesor();
  }

  BuscarAsesor(){
    this.asesorServicio.ObtenerAsesorPorId(this.id).subscribe((datos: ModeloAsesor) => {
      this.fgValidador.controls["id"].setValue(this.id)
      this.fgValidador.controls["codigo_asesor"].setValue(datos.codigo_asesor);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["apellido"].setValue(datos.apellido);
      this.fgValidador.controls["correo"].setValue(datos.correo);
      this.fgValidador.controls["numero_doc"].setValue(datos.numero_doc);
      this.fgValidador.controls["tipo_doc"].setValue(datos.tipo_doc);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
    })
  }

  EditarAsesor(){
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
    asesor.id = this.id;
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
    this.asesorServicio.EditarAsesor(asesor).subscribe((datos: ModeloAsesor) => {
      alert("Se edito el asesor correctamente");
      this.router.navigate(['/administrador/mostrar-asesor'])
    },(error: any) => {
      alert("error al editar asesor");
    })


  }

}
