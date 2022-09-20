import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pesquisa } from '../servico/model/Pesquisa';
import { Servico } from '../servico/model/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  url: string = environment.apiUrl + "api/servicos/";

  constructor(private http: HttpClient) { }

  getServiceByCliente(idCliente: number): Observable<Servico[]>  {
    return this.http.get<Servico[]>(`${this.url}${idCliente}/servicos`)
  }

  save(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(this.url, servico);
  }

  getServicos() : Observable<Servico[]> {
    return this.http.get<Servico[]>(this.url);
  }

  consultaPorCliente(pesquisa: Pesquisa): Observable<Servico[]>{
    return this.http.get<Servico[]>(`${this.url}search?nome=${pesquisa.nome}&mes=${pesquisa.mes}`)
  }
}
