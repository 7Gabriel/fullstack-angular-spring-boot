import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../clientes/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  

  url: string = environment.apiUrl + "api/clientes/";

  constructor(private http: HttpClient) { 

  }

  saveCliente(cliente: Cliente): Observable<Cliente> {
      return this.http.post<Cliente>(this.url, cliente);
  }

  updateCliente(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>(`${this.url}${cliente.id}`, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  getClienteById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}${id}`)
  }

  deleteCliente(cliente: Cliente): Observable<any> {
    return this.http.delete<any>(`${this.url}${cliente.id}`)
  }
}
