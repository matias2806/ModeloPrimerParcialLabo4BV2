import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() peliculaParaMostrar:Pelicula ;

  constructor() { 
    //   this.peliculaParaMostrar = new Pelicula();
    //   this.peliculaParaMostrar.nombre = "Up!";
    //   this.peliculaParaMostrar.tipo = "terror";
    //   this.peliculaParaMostrar.cantidadDePublico = "600";
    //   this.peliculaParaMostrar.fechaEstreno = new Date();
    //   this.peliculaParaMostrar.id = 2;
  }

  ngOnInit(): void {
  }

}
