import { Component, OnInit, Input } from '@angular/core';
import { Repartidor } from '../../clases/repartidor/repartidor';

@Component({
  selector: 'app-nacionalidad-repartidor',
  templateUrl: './nacionalidad-repartidor.component.html',
  styleUrls: ['./nacionalidad-repartidor.component.css']
})
export class NacionalidadRepartidorComponent implements OnInit {
  @Input() repartidorElejido: Repartidor;
  public pais: any;

  constructor() { }

  ngOnInit(): void {
  }

}
