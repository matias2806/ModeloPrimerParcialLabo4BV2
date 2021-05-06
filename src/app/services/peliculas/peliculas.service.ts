import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { AngularFireStorage } from '@angular/fire/storage'
import { map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/clases/pelicula/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private filePath: any;
  private dowloadURL: Observable<string>

  private path = '/peliculas';
  peliculasColecction: AngularFirestoreCollection<Pelicula>;
  public peliculas: Observable<Pelicula[]>;

  constructor(public db: AngularFirestore, private storage: AngularFireStorage) {
    this.peliculasColecction = db.collection(this.path);

    this.peliculas = this.peliculasColecction.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as unknown as Pelicula;
        return data;
      });
    }));
  }


  altaPelicula(pelicula: Pelicula) {
    return this.peliculasColecction.add(JSON.parse(JSON.stringify(pelicula)));
  }

  traerTodos() {
    return this.peliculas;
  }

  subirImagenYPelicula(imagen: any, pelicula: Pelicula){
    this.subirImagen(imagen, pelicula);
  }

  guardarPeliculaConFoto(pelicula: Pelicula, nombreURL :any){
    pelicula.URLfoto=nombreURL;
    // console.log(pelicula);
    return this.peliculasColecction.add(JSON.parse(JSON.stringify(pelicula)));
  }

  subirImagen(imagen: any, pelicula: Pelicula) {
    this.filePath = `images/${imagen.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, imagen);
    task.snapshotChanges().pipe(finalize(()=>{
      fileRef.getDownloadURL().subscribe(urlImagen =>{
        this.dowloadURL = urlImagen;
        // console.log('URL_IMAGEN', urlImagen);
        this.guardarPeliculaConFoto(pelicula, urlImagen);
      })
    })).subscribe();
  }
}
