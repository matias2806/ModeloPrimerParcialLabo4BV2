import { Injectable } from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/clases/pelicula/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private path = '/peliculas';
  peliculasColecction: AngularFirestoreCollection<Pelicula>;
  public peliculas: Observable<Pelicula[]>;
  
  constructor(public db: AngularFirestore) { 
    this.peliculasColecction = db.collection(this.path);

    this.peliculas = this.peliculasColecction.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as unknown as Pelicula;
        return data;
      });
    }));
  }


  altaPelicula(pelicula : Pelicula){
    return this.peliculasColecction.add(JSON.parse( JSON.stringify(pelicula)));
  }

  traerTodos(){
    return this.peliculas;
  }
}
