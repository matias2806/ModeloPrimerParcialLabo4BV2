import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  misDatos(){
    return this.http.get("https://api.github.com/users/matias2806");
  }
}
