import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(public authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onLogout(){
    
    try {
      await this.authSvc.logout();
      this.router.navigate(['/login'])
    } catch (error) {
      console.log(error);
    }
  }
}
