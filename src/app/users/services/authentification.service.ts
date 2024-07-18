import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import jwtDecode from "jwt-decode";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  isAuthenticated : boolean = false;
  roles : any;
  username : any;
  accessToken!: any;

  constructor(private http: HttpClient, private router : Router) { }

  public login(username: string, password: string){
    let options = {
      headers : new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
    }
    let params = new HttpParams().set("username", username).set("password", password);
    return this.http.post("http://localhost:8083/auth/login", params, options)
  }

  loadProfile(data: any) {
    this.isAuthenticated=true;
    this.accessToken = data['access-token'];
    let decodedJwt: any =  jwtDecode(this.accessToken);
    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope;
    window.localStorage.setItem("jwt-token", this.accessToken);

  }

  logout() {
    this.isAuthenticated = false;
    this.accessToken = undefined;
    this.username=undefined;
    this.roles=undefined;
  }

  loadJwtTokenFromLocalStorage() {
    let token = window.localStorage.getItem("jwt-token");
    if(token){
      this.loadProfile({"access-token" : token});
      this.router.navigateByUrl("");
    }
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>("http://localhost:8083/register", userData);
  }




}
