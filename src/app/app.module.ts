import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidosComponent } from './page/bienvenidos/bienvenidos.component';
import { BusquedapeliculasComponent } from './page/busquedapeliculas/busquedapeliculas.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { AltaPeliculaComponent } from './components/alta-pelicula/alta-pelicula.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AltaActoresComponent } from './page/alta-actores/alta-actores.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { AltaPeliculasComponent } from './page/alta-peliculas/alta-peliculas.component';
import { TablaActorComponent } from './components/tabla-actor/tabla-actor.component';
import { ActorPeliculaComponent } from './page/actor-pelicula/actor-pelicula.component';
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';
import { NacionalidadActorComponent } from './components/nacionalidad-actor/nacionalidad-actor.component';
import { InformacionActorComponent } from './components/informacion-actor/informacion-actor.component';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { LoginComponent } from './page/login/login.component';
import { AltaRepartidorComponent } from './page/alta-repartidor/alta-repartidor.component';
import { RepartidorDetalleComponent } from './page/repartidorDetalle/repartidor-detalle/repartidor-detalle.component';
import { TablaRepartidorComponent } from './components/tabla-repartidor/tabla-repartidor.component';
import { InformacionRepartidorComponent } from './components/informacion-repartidor/informacion-repartidor.component';
import { NacionalidadRepartidorComponent } from './components/nacionalidad-repartidor/nacionalidad-repartidor.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidosComponent,
    BusquedapeliculasComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    AltaPeliculaComponent,
    NavBarComponent,
    AltaActoresComponent,
    TablaPaisesComponent,
    AltaPeliculasComponent,
    TablaActorComponent,
    ActorPeliculaComponent,
    ListadoPeliculasComponent,
    NacionalidadActorComponent,
    InformacionActorComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaRepartidorComponent,
    RepartidorDetalleComponent,
    TablaRepartidorComponent,
    InformacionRepartidorComponent,
    NacionalidadRepartidorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAuthModule,
    HttpClientModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
