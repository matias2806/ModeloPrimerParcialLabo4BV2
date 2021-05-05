import { Actor } from '../actor/actor';

export class Pelicula {
    id?:number;
    nombre:string;
    tipo:string;
    fechaEstreno:Date;
    cantidadDePublico:string;
    foto:string;
    URLfoto?:string;
    actores?:Array<Actor>;
}