import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor/actor.service';
import { PaisService } from 'src/app/services/pais/pais.service';
import { Actor } from '../../clases/actor/actor';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  //listaCompleta
  listadoActores!: Actor[];
  paisCompleto: any;
  //actor
  actorSeleccionado: Actor;
  constructor(private _Aservice: ActorService, private _Pservice: PaisService) {

  }

  ngOnInit(): void {
    this._Aservice.traerTodos().subscribe((actores: Actor[]) => {
      //console.log(actores);
      this.listadoActores = actores;
    });
  }

  cargarActorSeleccionado(actor: Actor) {
    this.actorSeleccionado = actor;
    this._Pservice.conseguirPorNombre(this.actorSeleccionado.pais).subscribe(pais => {
      this.paisCompleto = pais;
      console.log(this.paisCompleto);
    });
  }

}
