import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { param } from 'jquery';
import { Observable } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente!: Cliente;
  success: boolean = false;
  errors!: string[];
  id!: number;

  constructor(
    private service: ClienteService, 
    private activateRoute: ActivatedRoute) { 
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
   let params: Observable<Params> = this.activateRoute.params;
   params.subscribe(
      urlParams => {
        this.id = urlParams['id'];
        if(this.id ){
          this.service
          .getClienteById(this.id )
          .subscribe(
            response => this.cliente = response,
            errorResponse => this.cliente = new Cliente()
          )
        }
      }
   )
  }


  onSubmit(){

    if(this.id){
      this.service.updateCliente(this.cliente)
      .subscribe(response => {
          this.success = true;
          this.errors = [];
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o cliente']
      })

    }else {
      this.service.saveCliente(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors = [];
        this.cliente = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }    
    );
  }

  }
}