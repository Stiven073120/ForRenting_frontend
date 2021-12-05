import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  rolee: string = "Cliente"

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'apellido': ['',[Validators.required]],
    'correo': ['',[Validators.required, Validators.email]],
    'clave': ['',[Validators.required]],
    'tipo_doc': ['',[Validators.required]],
    'numero_doc': ['',[Validators.required]],
    'descripcion': ['',[Validators.required]],
    'direccion': ['',[Validators.required]],
    'telefono': ['',[Validators.required]],    
  })

  constructor(private fb: FormBuilder, private clienteServicio: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  GuardarCliente(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let tipo_doc = this.fgValidador.controls["tipo_doc"].value;
    let numero_doc = this.fgValidador.controls["numero_doc"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let role = this.rolee;
    let c = new ModeloCliente();
    c.nombre = nombre;
    c.apellido = apellido;
    c.correo = correo;
    c.clave = clave;
    c.tipo_doc = tipo_doc;
    c.numero_doc = numero_doc;
    c.descripcion = descripcion;
    c.direccion = direccion;
    c.telefono = telefono;
    c.role = role;
    this.clienteServicio.CrearCliente(c).subscribe((datos: ModeloCliente) => {
      alert("Se ha registrado correctamente");
      this.router.navigate(["/inicio"]);
    },(error: any) => {
      alert("Error al registrarse");
    })

  }

}
