import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/Github/github.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  public misDatos :any;

  constructor(private _Gservice : GithubService) { 
    this._Gservice.misDatos().subscribe((data)=>{
      this.misDatos = data;
      console.log(data);
    })

  }



  ngOnInit(): void {
  }

}
