import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from '../../clases/actor/actor';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  @Output()eventoActorSeleccionado:EventEmitter<any> = new EventEmitter<any>();
  @Input()listadoActores!:Actor[];
  public cantidadActores;

  constructor() { }

  ngOnInit(): void {
  }

  enviarEventoActorSeleccionado(actor:Actor){
    // console.info(actor);
    this.eventoActorSeleccionado.emit(actor);
  }

}
