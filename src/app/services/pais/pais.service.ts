import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Pais } from '../../clases/pais/pais';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private paisActual?:string;

  constructor(private http: HttpClient) { }

  async todos2() {
    return this.http.get(`${environment.baseUrlApi}`).toPromise()
  }

  todos(){
    return this.http.get("https://restcountries.eu/rest/v2/all");
   }

  async conseguirId(id:string){
    return this.http.get(`${environment.baseUrlApi}${id}`).toPromise()
  }

}
