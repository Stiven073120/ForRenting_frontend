import { Component, OnInit } from '@angular/core';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-mostrar-asesor',
  templateUrl: './mostrar-asesor.component.html',
  styleUrls: ['./mostrar-asesor.component.css']
})
export class MostrarAsesorComponent implements OnInit {

listaAsesor: ModeloAsesor[] = [];

  constructor(private asesorServicio: AsesorService) { }

  ngOnInit(): void {
    this.ObtenerListaAsesor();
  }

  ObtenerListaAsesor(){
    this.asesorServicio.MostrarAsesor().subscribe((datos: ModeloAsesor[]) => {
      this.listaAsesor = datos;
    },(error: any) => {
      
    })
  }

}
