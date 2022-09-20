import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { ServicosService } from 'src/app/services/servicos.service';
import { Servico } from '../model/servico';

@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.css']
})
export class ServicoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico!: Servico;
  success: boolean = false;
  errors!: string[];
  loader: boolean = false;

  constructor(
    private clienteService: ClienteService,
    private servicoService: ServicosService) {
      this.servico = new Servico();
     }

  ngOnInit(): void {
    this.loader = false;
    this.clienteService.getClientes()
    .subscribe(response => this.clientes = response)
  }

  onSubmit(){
    this.servicoService.save(this.servico)
    .subscribe(response => {
      this.loader = true;
      this.success = true;
      this.errors = [];
      this.servico = new Servico();
      this.ngOnInit()
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    }    
  );
}
  

}
