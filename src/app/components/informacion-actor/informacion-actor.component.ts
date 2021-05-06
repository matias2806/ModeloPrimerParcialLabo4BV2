import { Component, OnInit, Input } from '@angular/core';
import { Actor } from '../../clases/actor/actor';

@Component({
  selector: 'app-informacion-actor',
  templateUrl: './informacion-actor.component.html',
  styleUrls: ['./informacion-actor.component.css']
})
export class InformacionActorComponent implements OnInit {
  @Input() actorElejido: Actor;

  constructor() { }

  ngOnInit(): void {
  }


}
