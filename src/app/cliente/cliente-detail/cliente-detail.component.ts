import { Subscription } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../clientes.service';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.scss']
})
export class ClienteDetailComponent implements OnInit, OnDestroy {

  cliente: Cliente = new Cliente();
  inscricao: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private clientesService: ClienteService) { }

  ngOnInit() {
    // this.inscricao = this.activatedRoute.params.subscribe(
    //   (params: any) => {
    //       this.cliente = this.clientesService.findById(params['id']);
    // });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/clientes', this.cliente.id, 'edit']);
  }
}
