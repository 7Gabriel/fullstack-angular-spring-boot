import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../login/model/usuario';
import { JwtHelperService } from  '@auth0/angular-jwt'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrl + "api/users/";
  tokenUrl: string = environment.apiUrl + environment.tokenUrl
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private httpClient: HttpClient
  ) { }

  obterToken(){
    const tokenString = localStorage.getItem("access_token")

    if(tokenString){
      return JSON.parse(tokenString).access_token
    }
    return null;
  }

  salvar(usuario: Usuario) : Observable<any>{
      return this.httpClient.post<any>(this.apiUrl, usuario);
  }

  login(username: string, password: string) : Observable<any> {
    const params = new HttpParams()
    .set("username", username)
    .set("password", password)
    .set("grant_type", "password")

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    return this.httpClient.post<any>(this.tokenUrl, params.toString(), { headers });
  }

  isAuthenticated(): boolean {
    const token = this.obterToken();
    if(token){
      const expired = this.jwtHelper.isTokenExpired(token)
      return !expired;
    }
    return false;
  }

  encerrarSessao(){
    localStorage.removeItem('access_token');
  }

  getUsuarioAutenticado(){
    const token = this.obterToken();
    if(token){
      return this.jwtHelper.decodeToken(token).user_name; 
    }
  }
}
