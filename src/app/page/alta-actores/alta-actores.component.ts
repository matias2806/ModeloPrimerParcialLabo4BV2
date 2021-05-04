import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PaisService } from 'src/app/services/pais/pais.service';
import { ActorService } from 'src/app/services/actor/actor.service';
import { Pais } from '../../clases/pais/pais';
import { Actor } from '../../clases/actor/actor';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {

  listadoPaises!: any[];
  paisSeleccionado!: Pais;
  public forma: FormGroup;

  constructor(private _Pservice: PaisService, private fb: FormBuilder, private _Aservice: ActorService, private router: Router,) {
    this.listadoPaises = [];
  }

  ngOnInit(): void {

    //   await this.Pservice.todos().then((res: any) => {
    //     console.log(res);
    //   });esta es la 2da opcion con async await
    this._Pservice.todos().subscribe((paises) => {

      this.listadoPaises = JSON.parse(JSON.stringify(paises));
      console.log(paises);
    });

    this.forma = this.fb.group({
      'nombre': ['', [Validators.required]],
      'apellido': ['', Validators.required],
      'telefono': ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      'email': ['', [Validators.required, Validators.email]],
      'nacionalidad': [{ value: '', disabled: true }, this.validarNombrePais],
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


  cargarPaisSeleccionado(pais: Pais) {
    console.info(pais);
    this.paisSeleccionado = pais;

    // console.info(this.peliculaSeleccionada);
  }

  altaActor() {
    // var nombre = this.forma.controls['nombre'].value;
    // var apellido = this.forma.controls['apellido'].value;
    // var telefono = this.forma.controls['telefono'].value;
    // var email = this.forma.controls['email'].value;
    // var nacionalidad = this.paisSeleccionado.name;
    // console.log(nombre, apellido, telefono, email, nacionalidad);
    let nuevoActor: Actor = {
      nombre: this.forma.controls['nombre'].value,
      apellido: this.forma.controls['apellido'].value,
      telefono: this.forma.controls['telefono'].value,
      email: this.forma.controls['email'].value,
      pais: this.paisSeleccionado.name,
    }
    const queDevolvio = this._Aservice.altaActor(nuevoActor);
    queDevolvio.then(ok => {
      if (ok.path) {
        this.mensajeDeAltaExitoso();
        this.router.navigateByUrl("/Bienvenido");
      }
      else {
        this.mensajeDeAltaError();
        console.log("no ok");
      }
    });
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
      title: 'Actor dado de alta correctamente!'
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

  prueba() {

  }
}
