import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza/pizza';
import { PizzaService } from 'src/app/services/pizza/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  listadoPizzas!: any[];
  pizzaSeleccionado!: Pizza;
  constructor(private _PizzaService: PizzaService) { }

  ngOnInit(): void {
    this._PizzaService.traerTodos().subscribe((pizzas) => {

      this.listadoPizzas = JSON.parse(JSON.stringify(pizzas));
      //console.log(paises);
    });
  }

  cargarPizzaSeleccionada(pizza : Pizza){
    console.log(pizza);
    this.pizzaSeleccionado = pizza;
  }

}
