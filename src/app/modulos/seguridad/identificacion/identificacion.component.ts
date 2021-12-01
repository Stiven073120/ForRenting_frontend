import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from "crypto-js";



@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
  }

  IdentificarUsuario() {
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.IdentificarCliente(usuario, claveCifrada).subscribe((datos: any) => {
      //ok
      alert("datos de cliente correctos")
    }, (error: any) => {
      //ko
      this.servicioSeguridad.IdentificarAsesor(usuario, claveCifrada).subscribe((datos: any) => {
        //ok
        alert("datos de asesor correctos")
      }, (error: any) => {
        this.servicioSeguridad.IdentificarAdministrador(usuario, claveCifrada).subscribe((datos: any) => {
          //ok
          alert("datos de administrador correctos")
        },(error: any) => {
          alert("datos incorrectos")
        })
      })
    })



  }
}