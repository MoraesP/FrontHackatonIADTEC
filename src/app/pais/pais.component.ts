import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pais } from './pais.model';
import { PaisService } from './pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss'],
})
export class PaisComponent {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  id: number;
  paises: Observable<Pais[]> = this.paisService.findAll();

  constructor(
    private paisService: PaisService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  displayedColumns: string[] = ['id', 'nome'];

  novoPais() {
    this.router.navigate(['pais/new'], {});
  }
}
