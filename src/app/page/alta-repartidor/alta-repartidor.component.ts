import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Pais } from '../../clases/pais/pais';
import { PaisService } from 'src/app/services/pais/pais.service';
import { MensajesService } from 'src/app/services/mensajes/mensajes.service';
import { Router } from '@angular/router';
import { Repartidor } from '../../clases/repartidor/repartidor' ;
import { RepartidorService } from 'src/app/services/repartidor/repartidor.service';
@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent implements OnInit {

  listadoPaises!: any[];
  paisSeleccionado!: Pais;
  public forma: FormGroup;
  region:string = "europe";

  constructor(private _Pservice: PaisService, private fb: FormBuilder,private _Rservice: RepartidorService, private router: Router, private _Mservice: MensajesService)  {
    this.listadoPaises = [];
  }

  ngOnInit(): void {
    this._Pservice.todosDeUnaRegion(this.region).subscribe((paises) => {
      this.listadoPaises = JSON.parse(JSON.stringify(paises));
    });
    this.forma = this.fb.group({
      'nombre': ['', [Validators.required]],
      'dni': ['', [Validators.required, Validators.min(1000000), Validators.max(99999999)]],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'capacidad': ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      'tieneUnidad': ['', [Validators.required]],
      'nacionalidad': [{ value: '', disabled: true }, this.validarNombrePais],
    });
  }

  cambioDeRegion(){
    if(this.region == "europe"){
      this.region = "Africa";
    }
    else{
      this.region = "europe";
    }
    this._Pservice.todosDeUnaRegion(this.region).subscribe((paises) => {
      this.listadoPaises = JSON.parse(JSON.stringify(paises));
    });
  }
  
  validarNombrePais(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    //console.log(nombre);
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
    // console.info(pais);
    this.paisSeleccionado = pais;
    console.info(this.forma);
  }

  altaRepartidor() {
    let nuevoRepartidor: Repartidor = {
      nombre: this.forma.controls['nombre'].value,
      dni: this.forma.controls['dni'].value,
      edad: this.forma.controls['edad'].value,
      capacidadTransporte: this.forma.controls['capacidad'].value,
      unidadPropia: this.forma.controls['tieneUnidad'].value,
      pais: this.paisSeleccionado.name,
      paisBandera: this.paisSeleccionado.flag,
    }
    console.log(nuevoRepartidor);

    const queDevolvio = this._Rservice.altaRepartidor(nuevoRepartidor);
    queDevolvio.then(ok => {
      if (ok.path) {
        this._Mservice.mensajeExitoso('Repartidor dado de alta correctamente!');
        this.router.navigateByUrl("/Bienvenida");
      }
      else {
        this._Mservice.mensajeError('Lo sentimos mucho ocurrio un error!');
        console.log("no ok");
      }
    });
  }
}
