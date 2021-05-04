import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActorService } from 'src/app/services/actor/actor.service';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';
import { Actor } from '../../clases/actor/actor';
import { Pais } from '../../clases/pais/pais';
import { Pelicula } from '../../clases/pelicula/pelicula';

@Component({
  selector: 'app-alta-peliculas',
  templateUrl: './alta-peliculas.component.html',
  styleUrls: ['./alta-peliculas.component.css']
})
export class AltaPeliculasComponent implements OnInit {

  listadoActores!: Actor[];
  actorSeleccionado!: Actor;
  public forma: FormGroup;

  constructor(private _Aservice: ActorService, private _PeliService: PeliculasService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this._Aservice.traerTodos().subscribe((actores: Actor[]) => {
      console.log(actores);
      this.listadoActores = actores;
    });

    this.forma = this.fb.group({
      'nombre': ['', [Validators.required]],
      'fecha': ['', Validators.required],


    });

  }

  cargarActorSeleccionado(actor: Actor) {
    console.info(actor);
    this.actorSeleccionado = actor;
  }

  altaPelicula() {

    // let nuevaPelicula: Pelicula = {
    //   nombre: this.forma.controls['nombre'].value,
    //   id: 1,
    //   tipo: "terror",
    //   fechaEstreno: new Date(),
    //   cantidadDePublico: "100",
    //   foto: "sa",
    //   nombreActor:"sad",
    //   apellidoActor:"sad",
    //   emailActor:"sad",
    //   paisActor:"sad", 
    // }
    // const queDevolvio = this._PeliService.altaPelicula(nuevaPelicula);
    // queDevolvio.then(ok => {
    //   if (ok.path) {
    //     this.mensajeDeAltaExitoso();
    //     // this.router.navigateByUrl("/Bienvenido")
    //   }
    //   else {
    //     this.mensajeDeAltaError();
    //     console.log("no ok");
    //   }
    // });
  }

  mensajeDeAltaExitoso() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Pelicula dada de alta correctamente!'
    })
  }

  mensajeDeAltaError() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'error',
      title: 'Lo sentimos mucho ocurrio un error!'
    })
  }

}
