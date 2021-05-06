import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/services/mensajes/mensajes.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private AuthSvc:AuthService, private router: Router, private _Mservice : MensajesService) { }

  ngOnInit(): void {
  }

  async onLogin(){
    const {email, password} = this.loginForm.value;
    //console.log('form ->',this.loginForm.value);
    try {
      const user = this.AuthSvc.login(email, password);
      
      // .then((data)=> console.log(data));

      
      if(user){
        //Redirect to home page
        console.log("imprimo",user);
        this._Mservice.mensajeExitoso("Login exitoso");
        this.router.navigate(['/']);
      }
      else{
        console.log("else");
        this._Mservice.mensajeError("Login fallo");
      }
    } catch (error) {
      console.log("aa",error);
    }
  }

  cargarAdmin(){
    this.loginForm.setValue({email: 'u1@gmail.com', password: '123456'});
  }
}
