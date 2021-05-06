import { Component, OnInit, Input } from '@angular/core';
import { PaisService } from 'src/app/services/pais/pais.service';
import { Actor } from '../../clases/actor/actor';
@Component({
  selector: 'app-nacionalidad-actor',
  templateUrl: './nacionalidad-actor.component.html',
  styleUrls: ['./nacionalidad-actor.component.css']
})
export class NacionalidadActorComponent implements OnInit {
  @Input() paisElejido: any;
  public pais: any;

  constructor(private _Pservice: PaisService) {
    // if (this.actorElejido) {
    //   this._Pservice.conseguirPorNombre(this.actorElejido.pais).subscribe(pais => {
    //     this.pais = pais;
    //     console.log(this.pais[0].flag);
    //   });
    // }
  }

  ngOnInit(): void {
    
  }


}
