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
import { PaisDetailComponent } from './pais-detail/pais-detail.components';
import { PaisEditComponent } from './pais-edit/pais-edit.component';
import { PaisComponent } from './pais.component';
import { PaisRoutingModule } from './pais.routing.module';
import { PaisService } from './pais.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaisRoutingModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [PaisEditComponent],
  declarations: [PaisComponent, PaisDetailComponent, PaisEditComponent],
  providers: [PaisService],
})
export class PaisModule {}
