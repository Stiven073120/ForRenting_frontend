import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloMensajeContactenos } from 'src/app/modelos/mensaje-contactenos.modelo';
import { MensajeContactenosService } from 'src/app/servicios/mensaje-contactenos.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre':['',[Validators.required]],
    'telefono':['',[Validators.required]],
    'asunto':['',[Validators.required]],
    'mensaje':['',[Validators.required]]
  })

  constructor(private fb: FormBuilder, private router: Router, private mensajeContactenosServicio: MensajeContactenosService) { }

  ngOnInit(): void {
  }

  GuardarMensajeC(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let asunto = this.fgValidador.controls["asunto"].value;
    let mensaje = this.fgValidador.controls["mensaje"].value;
    let mensajeContactenos = new ModeloMensajeContactenos;
    mensajeContactenos.nombre = nombre;
    mensajeContactenos.telefono = telefono;
    mensajeContactenos.asunto = asunto;
    mensajeContactenos.mensaje = mensaje;
    this.mensajeContactenosServicio.CrearMensaje(mensajeContactenos).subscribe((datos: ModeloMensajeContactenos)=> {
      alert("el mensaje se ha enviado correctamente");
      this.router.navigate(["/inicio"])
    },(error: any)=>{
      alert("error al crear el mensaje")
    })
  }



}
