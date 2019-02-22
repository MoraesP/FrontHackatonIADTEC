import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../clientes.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss'],
})
export class ClienteFormComponent implements OnInit, OnDestroy {
  cliente: Cliente = new Cliente();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService,
  ) {}

  navigateToId(newId: number | string) {
    return this.router.navigate(['..', newId.toString()], {
      relativeTo: this.activatedRoute,
    });
  }

  ngOnInit() {}

  ngOnDestroy() {}

  onSubmit() {
    this.clienteService.save(this.cliente);
    this.voltar();
  }

  voltar() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
