import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula/pelicula';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {

  peliculaNueva : Pelicula;
  variable : string;
  @Output() EventoCreacionNuevaPelicula: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  guardarNuevaPelicula(){
    this.EventoCreacionNuevaPelicula.emit(this.peliculaNueva)
    console.log(this.peliculaNueva);
    this.peliculaNueva = null;
  }

  hacerNuevaPelicula(){
    this.peliculaNueva = new Pelicula();
    
  }

}
