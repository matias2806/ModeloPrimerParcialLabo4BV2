import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor/repartidor';

@Component({
  selector: 'app-tabla-repartidor',
  templateUrl: './tabla-repartidor.component.html',
  styleUrls: ['./tabla-repartidor.component.css']
})
export class TablaRepartidorComponent implements OnInit {

  @Output()eventoActorSeleccionado:EventEmitter<any> = new EventEmitter<any>();
  @Input()listadoRepartidores!:Repartidor[];
  public cantidadRepartidores;

  constructor() { }

  ngOnInit(): void {
  }

  enviarEventoReparidorSeleccionado(repartidor:Repartidor){
    console.info(repartidor);
    this.eventoActorSeleccionado.emit(repartidor);
  }

}
