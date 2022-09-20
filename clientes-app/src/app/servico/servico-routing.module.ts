import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { ServicoFormComponent } from './servico-form/servico-form.component';
import { ServicoListComponent } from './servico-list/servico-list.component';

const routes: Routes = [
  { path: 'servicos', canActivate: [ AuthGuard ], component: LayoutComponent, children: [ 
    {path: 'form', component: ServicoFormComponent },
    {path: 'lista', component: ServicoListComponent},
    {path: '', redirectTo: '/servicos/lista', pathMatch: 'full'}
  ], }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }
