import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {

  id: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private clienteServicio: ClienteService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.EliminarCliente();
    this.router.navigate(['/administrador/mostrar-cliente'])
  }

  EliminarCliente(){
    let id = this.id;
    this.clienteServicio.EliminarCliente(id).subscribe((datos: ModeloCliente)=>{
      alert(`Se elimino correctamente el cliente`)
    },(error: any)=>{
      alert(`error al eliminar cliente ${id}`)
    })
  }
}
