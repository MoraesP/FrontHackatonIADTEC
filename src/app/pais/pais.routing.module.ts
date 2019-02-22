import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaisDetailComponent } from './pais-detail/pais-detail.components';
import { PaisComponent } from './pais.component';
import { PaisEditComponent } from './pais-edit/pais-edit.component';

const rotas = [
  {
    path: 'pais',
    component: PaisComponent,
  },
  { path: 'pais/new', component: PaisEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(rotas)],
  exports: [RouterModule],
})
export class PaisRoutingModule {}
