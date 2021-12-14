import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  id: string = '';
  role: string = "Cliente";

  fgValidador: FormGroup = this.fb.group({
    'id':['',[Validators.required]],
    'nombre':['',[Validators.required]],
    'apellido':['',[Validators.required]],
    'correo':['',[Validators.required, Validators.email]],
    'tipo_doc':['',[Validators.required]],
    'numero_doc':['',[Validators.required]],
    'descripcion':['',[Validators.required]],
    'direccion':['',[Validators.required]],
    'telefono':['',[Validators.required]]
  })

  constructor(private fb: FormBuilder, private router: Router, private clienteServicio: ClienteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarCliente();
  }
  
  BuscarCliente(){
    this.clienteServicio.ObtenerClientePorId(this.id).subscribe((datos: ModeloCliente) => {
      this.fgValidador.controls["id"].setValue(this.id)
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
 
  EditarClientee(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let tipo_doc = this.fgValidador.controls["tipo_doc"].value;
    let numero_doc = this.fgValidador.controls["numero_doc"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let role = this.role;
    let cliente = new ModeloCliente();
    cliente.id = this.id;
    cliente.nombre = nombre;
    cliente.apellido = apellido;
    cliente.correo = correo;
    cliente.tipo_doc = tipo_doc;
    cliente.numero_doc = numero_doc;
    cliente.descripcion = descripcion;
    cliente.direccion = direccion;
    cliente.telefono = telefono;
    cliente.role = role;
    this.clienteServicio.EditarCliente(cliente).subscribe((datos: ModeloCliente) => {
      alert("Se edito el cliente correctamente");
      this.router.navigate(['/administrador/mostrar-cliente'])
    },(error: any) => {
      alert("error al editar cliente");
    })
  }
}
