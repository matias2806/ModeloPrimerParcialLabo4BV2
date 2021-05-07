import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza/pizza';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MensajesService } from 'src/app/services/mensajes/mensajes.service';
import { PizzaService } from 'src/app/services/pizza/pizza.service';

@Component({
  selector: 'app-pizza-alta',
  templateUrl: './pizza-alta.component.html',
  styleUrls: ['./pizza-alta.component.css']
})
export class PizzaAltaComponent implements OnInit {

  @Output()eventoPizzaAlta:EventEmitter<any> = new EventEmitter<any>();
  //Hasta aca llegue me falta lista modificar y baja 
  listadoPizzas!: any[];
  pizzaSeleccionado!: Pizza;
  public forma: FormGroup;

  constructor(private fb: FormBuilder, private _Mservice: MensajesService, private _Pservice: PizzaService) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['', [Validators.required]],
      'ingredientes': ['', [Validators.required]],
      'precio': ['', [Validators.required, Validators.min(1), Validators.max(99999)]],
      'peso': ['', [Validators.required, Validators.min(500), Validators.max(1000)]],
    });
  }

  enviarEventoPizzaCargada(pizza:Pizza){
    console.info(pizza);
    this.eventoPizzaAlta.emit(pizza);
  }

  // verForma(){
  //   console.log(this.forma);
  // }
  altaPizza() {
    let nuevaPizza: Pizza = {
      nombre: this.forma.controls['nombre'].value,
      ingredientes: this.forma.controls['ingredientes'].value,
      precio: this.forma.controls['precio'].value,
      peso: this.forma.controls['peso'].value,
    }
    console.log(nuevaPizza);

    const queDevolvio = this._Pservice.altaPizza(nuevaPizza);
    queDevolvio.then(ok => {
      if (ok.path) {
        this._Mservice.mensajeExitoso('Pizza dado de alta correctamente!');
      }
      else {
        this._Mservice.mensajeError('Lo sentimos mucho ocurrio un error!');
        console.log("no ok");
      }
    });
  }
}
