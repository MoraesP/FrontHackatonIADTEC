import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';
import { ClienteComponent } from './clientes.component';
import { ClienteService } from './clientes.service';
import { ClienteRoutingModule } from './clientes.routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClienteRoutingModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [],
  declarations: [
    ClienteComponent,
    ClienteFormComponent,
    ClienteDetailComponent,
  ],
  providers: [ClienteService],
})
export class ClienteModule {}
