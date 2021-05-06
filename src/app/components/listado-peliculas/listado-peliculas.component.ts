import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula/pelicula';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';
import { Actor } from '../../clases/actor/actor';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  @Input() actorElejido: Actor;
  listaPeliculas: Pelicula[];
  peliculasEnLasQueParticipo: Pelicula[];

  constructor(private _Pservice : PeliculasService) { 
    this._Pservice.traerTodos().subscribe(peli => {

      this.listaPeliculas = peli;
      // console.log(this.listaPeliculas);
    })
  }

  ngOnInit(): void {
  }

  enCualesParticipo():boolean{
    var aux = false;
    if(this.actorElejido){
      this.peliculasEnLasQueParticipo = new Array<Pelicula>();
      this.listaPeliculas.forEach(peli => {
        peli.actores.forEach(actor => {
          if(actor.nombre == this.actorElejido.nombre && actor.apellido == this.actorElejido.apellido){
            this.peliculasEnLasQueParticipo.push(peli);
            aux = true;
          }
        });
      });
    }
    // console.log(this.peliculasEnLasQueParticipo);
    return aux;
  }

}
