import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor/repartidor';
import { RepartidorService } from '../../../services/repartidor/repartidor.service';
import { PaisService } from '../../../services/pais/pais.service';

@Component({
  selector: 'app-repartidor-detalle',
  templateUrl: './repartidor-detalle.component.html',
  styleUrls: ['./repartidor-detalle.component.css']
})
export class RepartidorDetalleComponent implements OnInit {

  //listaCompleta
  listadoRepartidores!: Repartidor[];
  paisCompleto: any;
  //actor
  repartidorSeleccionado: Repartidor;
  constructor(private _Rservice: RepartidorService, private _Pservice: PaisService) { }

  ngOnInit(): void {
    this._Rservice.traerTodos().subscribe((repartidores: Repartidor[]) => {
      //console.log(actores);
      this.listadoRepartidores = repartidores;
      console.log( this.listadoRepartidores);
    });
  }

  cargarRepartidorSeleccionado(repartidor: Repartidor) {
    this.repartidorSeleccionado = repartidor;
    console.log(this.repartidorSeleccionado);
    // this._Pservice.conseguirPorNombre(this.repartidorSeleccionado.pais).subscribe(pais => {
    //   this.paisCompleto = pais;
    //   console.log(this.paisCompleto);
    // });
  }
}
