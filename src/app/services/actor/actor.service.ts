import { Injectable } from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Actor } from '../../clases/actor/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  
  private path = '/actores';
  actoresColecction: AngularFirestoreCollection<Actor>;
  public actores: Observable<Actor[]>;

  constructor(public db: AngularFirestore) { 
    this.actoresColecction = db.collection(this.path);

    this.actores = this.actoresColecction.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as unknown as Actor;
        return data;
      });
    }));
  }

  altaActor(actor : Actor){
    return this.actoresColecction.add(JSON.parse( JSON.stringify(actor)));
  }

  traerTodos(){
    return this.actores;
  }
}
