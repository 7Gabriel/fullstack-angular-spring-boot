import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Cliente[] = []
  clienteSelected!: Cliente;
  mensagemSucesso!: string;
  mensagemErro!: string;

  constructor(private service: ClienteService) { 
    
  }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.service.getClientes()
    .subscribe(response => this.clientes = response)
  }

  preparaDelete(cliente: Cliente){
    this.clienteSelected = cliente;
    this.service.deleteCliente(this.clienteSelected)
    .subscribe(
      response => {
        this.mensagemSucesso = "Cliente excluido com sucesso",
        this.ngOnInit()
      }, 
      errorResponse => this.mensagemErro = "Erro ao tentar excluir cliente")
  }


}
