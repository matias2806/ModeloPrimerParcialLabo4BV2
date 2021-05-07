import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-pizza',
  templateUrl: './tabla-pizza.component.html',
  styleUrls: ['./tabla-pizza.component.css']
})
export class TablaPizzaComponent implements OnInit {
  @Input()listadoPizzas!:any[];
  @Output()eventoPizzaSeleccionado:EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  enviarEventoPizzaSeleccionada(pizza){
    this.eventoPizzaSeleccionado.emit(pizza);
  }
}
