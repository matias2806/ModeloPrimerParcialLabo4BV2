import { Injectable } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza/pizza';
import {AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private path = '/pizzas';
  pizzasColecction: AngularFirestoreCollection<Pizza>;
  public pizzas: Observable<Pizza[]>;

  constructor(public db: AngularFirestore) { 
    this.pizzasColecction = db.collection(this.path);

    this.pizzas = this.pizzasColecction.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as unknown as Pizza;
        return data;
      });
    }));
  }

  altaPizza(pizza : Pizza){
    return this.pizzasColecction.add(JSON.parse( JSON.stringify(pizza)));
  }

  traerTodos(){
    return this.pizzas;
  }
}
