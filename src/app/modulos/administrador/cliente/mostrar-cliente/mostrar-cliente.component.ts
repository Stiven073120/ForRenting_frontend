import { Component, OnInit } from '@angular/core';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.component.html',
  styleUrls: ['./mostrar-cliente.component.css']
})
export class MostrarClienteComponent implements OnInit {

  listaCliente: ModeloCliente[] = [];

  constructor(private clienteServicio: ClienteService) { }

  ngOnInit(): void {
    this.ObtenerListaCliente();
  }

  ObtenerListaCliente(){
    this.clienteServicio.MostrarCliente().subscribe((datos: ModeloCliente[]) => {
      this.listaCliente = datos;
    },(error: any) => {
      
    })
  }

}