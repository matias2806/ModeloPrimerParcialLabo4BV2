import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor/actor.service';
import { MensajesService } from 'src/app/services/mensajes/mensajes.service';
import { Actor } from '../../clases/actor/actor';
import { Pelicula } from '../../clases/pelicula/pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  //listaCompleta
  listadoActores!: Actor[];
  //actor
  actorSeleccionado: Actor;
  constructor(private _Aservice: ActorService,) {

  }

  ngOnInit(): void {
    this._Aservice.traerTodos().subscribe((actores: Actor[]) => {
      console.log(actores);
      this.listadoActores = actores;
    });
  }

  cargarActorSeleccionado(actor: Actor) {
    // console.info(actor);
    this.actorSeleccionado=actor;
    console.log(this.actorSeleccionado);

  }

}
