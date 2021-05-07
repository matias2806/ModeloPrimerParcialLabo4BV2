import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { ActorPeliculaComponent } from './page/actor-pelicula/actor-pelicula.component';
import { AltaActoresComponent } from './page/alta-actores/alta-actores.component';
import { AltaPeliculasComponent } from './page/alta-peliculas/alta-peliculas.component';
import { AltaRepartidorComponent } from './page/alta-repartidor/alta-repartidor.component';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { BienvenidosComponent } from './page/bienvenidos/bienvenidos.component';
import { BusquedapeliculasComponent } from './page/busquedapeliculas/busquedapeliculas.component';
import { LoginComponent } from './page/login/login.component';
import { PizzasComponent } from './page/pizzas/pizzas/pizzas.component';
import { RepartidorDetalleComponent } from './page/repartidorDetalle/repartidor-detalle/repartidor-detalle.component';

const routes: Routes = [
  // { path: '', redirectTo: '/Busqueda', pathMatch: 'full' },
  // { path: 'Busqueda', component:  BusquedapeliculasComponent},
  // { path: 'Bienvenido', component: BienvenidosComponent },
  // { path: 'Tabla', component: TablaPeliculaComponent },
  // { path: 'AltaActores', component:  AltaActoresComponent},
  // { path: 'AltaPeliculas', component:  AltaPeliculasComponent},
  // { path: 'ActorPelicula', component:  ActorPeliculaComponent},
  { path: '', redirectTo: '/Bienvenida', pathMatch: 'full' },
  { path: 'Bienvenida', component:  BienvenidaComponent},
  { path: 'LogIn', component:  LoginComponent},
  { path: 'AltaRepartidor', component:  AltaRepartidorComponent},
  { path: 'RepartidorDetalle', component:  RepartidorDetalleComponent},
  { path: 'Pizzas', component:  PizzasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
