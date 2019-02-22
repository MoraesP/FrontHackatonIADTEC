import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClienteComponent } from './clientes.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

const rotas = [
  {
    path: 'cliente',
    component: ClienteComponent,
  },
  { path: 'cliente/new', component: ClienteFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(rotas)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
