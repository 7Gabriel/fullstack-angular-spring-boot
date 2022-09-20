import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoRoutingModule } from './servico-routing.module';
import { ServicoFormComponent } from './servico-form/servico-form.component';
import { ServicoListComponent } from './servico-list/servico-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServicoFormComponent,
    ServicoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ServicoRoutingModule,
    RouterModule
  ],
  exports: [
    ServicoFormComponent,
    ServicoListComponent
  ]
})
export class ServicoModule { }
