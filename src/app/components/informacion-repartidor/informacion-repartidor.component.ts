import { Component, OnInit, Input } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor/repartidor';

@Component({
  selector: 'app-informacion-repartidor',
  templateUrl: './informacion-repartidor.component.html',
  styleUrls: ['./informacion-repartidor.component.css']
})
export class InformacionRepartidorComponent implements OnInit {
  @Input() repartidorElejido: Repartidor;
  constructor() { }

  ngOnInit(): void {
  }

}
