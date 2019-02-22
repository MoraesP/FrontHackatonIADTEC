import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';
import { ClienteService } from './clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClienteComponent {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  id: number;
  clientes: Observable<Cliente[]> = this.clienteService.findAll();

  constructor(private clienteService: ClienteService, private router: Router) {}

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email'];

  novoPais() {
    this.router.navigate(['cliente/new'], {});
  }
}
