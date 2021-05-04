import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  
  @Input() listadoPeliculas: Pelicula[];
  @Output() peliculaSeleccionadaEvento: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  SeleccionPelicula(pelicula: Pelicula){
    // console.info("peli ==>"+ pelicula);
    this.peliculaSeleccionadaEvento.emit(pelicula);
  }

}
