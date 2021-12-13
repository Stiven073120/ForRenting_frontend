import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-eliminar-asesor',
  templateUrl: './eliminar-asesor.component.html',
  styleUrls: ['./eliminar-asesor.component.css']
})
export class EliminarAsesorComponent implements OnInit {

  id: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private asesorServicio: AsesorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.EliminarAsesor();
    this.router.navigate(['/administrador/mostrar-asesor'])
  }

  EliminarAsesor(){
    let id = this.id;
    this.asesorServicio.EliminarAsesor(id).subscribe((datos: ModeloAsesor)=>{
      alert(`Se elimino correctamente el asesor`)
    },(error: any)=>{
      alert(`error al eliminar asesor ${id}`)
    })
  }
}
