import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';

const routes: Routes = [
  { path: 'clientes', canActivate: [AuthGuard], component: LayoutComponent, children: [
    { path: 'form', component: ClientesFormComponent },
    { path: 'form/:id', component: ClientesFormComponent },
    { path: 'lista', component: ClientesListComponent },
    { path: '', redirectTo: '/clientes/lista', pathMatch: 'full'}
], }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
