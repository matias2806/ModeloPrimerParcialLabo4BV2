import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from '../../clases/pais/pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Input()listadoPaises!:any[];
  @Output()eventoPaisSeleccionado:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  enviarEventoPaisSeleccionado(pais:Pais){
    // console.log(pais);
    this.eventoPaisSeleccionado.emit(pais);
  }
}
