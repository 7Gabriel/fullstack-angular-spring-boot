import { Component, OnInit } from '@angular/core';
import { ServicosService } from 'src/app/services/servicos.service';
import { Pesquisa } from '../model/Pesquisa';
import { Servico } from '../model/servico';

@Component({
  selector: 'app-servico-list',
  templateUrl: './servico-list.component.html',
  styleUrls: ['./servico-list.component.css']
})
export class ServicoListComponent implements OnInit {


  servicos: Servico[] = [];
  meses!: number[]
  pesquisa!: Pesquisa;

  constructor(private servico: ServicosService) {
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
   }

  ngOnInit(): void {
    this.pesquisa = new Pesquisa();
    this.servico.getServicos()
    .subscribe(response => this.servicos = response)
  }

  consultar(){
    this.servico.consultaPorCliente(this.pesquisa)
    .subscribe(respo => {
      console.log(respo)
      this.servicos = respo
    })

  }


}
