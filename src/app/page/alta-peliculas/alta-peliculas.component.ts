import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActorService } from 'src/app/services/actor/actor.service';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';
import { Actor } from '../../clases/actor/actor';
import { Pais } from '../../clases/pais/pais';
import { Pelicula } from '../../clases/pelicula/pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-peliculas',
  templateUrl: './alta-peliculas.component.html',
  styleUrls: ['./alta-peliculas.component.css']
})
export class AltaPeliculasComponent implements OnInit {

  listadoActores!: Actor[];
  actorSeleccionado!: Actor;
  public forma: FormGroup;
  private imagen: any;

  constructor(private _Aservice: ActorService, private _PeliService: PeliculasService, private fb: FormBuilder, private router: Router,) { }

  ngOnInit(): void {
    this._Aservice.traerTodos().subscribe((actores: Actor[]) => {
      console.log(actores);
      this.listadoActores = actores;
    });

    this.forma = this.fb.group({
      'nombre': ['', [Validators.required]],
      'fecha': ['', Validators.required],
      'foto': ['', Validators.required],
      'tipo': ['', Validators.required],
      'nombreActor': [{ value: '', disabled: true }, this.validarNombrePais],
      'apellidoActor': [{ value: '', disabled: true }, this.validarNombrePais],
      'emailActor': [{ value: '', disabled: true }, this.validarNombrePais],
      'paisActor': [{ value: '', disabled: true }, this.validarNombrePais],

    });
    console.log(this.forma);
  }

  validarNombrePais(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    console.log(nombre);
    if (nombre != null) {
      return {
        valido: true
      }
    }
    else {
      return null;
    }
  }

  cargarActorSeleccionado(actor: Actor) {
    console.info(actor);

    this.actorSeleccionado = actor;
  }

  nuevaImagen(event: any): void {
    this.imagen = event.target.files[0];
    console.log(this.imagen);
  }

  altaPelicula() {
    console.log(this.forma);
    console.log(this.imagen);
    let nuevaPelicula: Pelicula = {
      nombre: this.forma.controls['nombre'].value,
      tipo: this.forma.controls['tipo'].value,
      fechaEstreno: this.forma.controls['fecha'].value,
      foto: this.imagen.name,
      nombreActor: this.actorSeleccionado.nombre,
      apellidoActor: this.actorSeleccionado.apellido,
      emailActor: this.actorSeleccionado.email,
      paisActor: this.actorSeleccionado.pais,
      telefonoActor: this.actorSeleccionado.telefono,
      cantidadDePublico: "0",
    }
    console.log(nuevaPelicula);

    this._PeliService.subirImagen(this.imagen, nuevaPelicula);
    this.mensajeDeAltaExitoso();
    this.router.navigateByUrl("/Bienvenido");
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
