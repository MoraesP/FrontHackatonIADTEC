import { OnDestroy, OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Pais } from '../pais.model';
import { PaisService } from '../pais.service';
import { async } from 'q';

@Component({
  selector: 'app-pais-detail',
  templateUrl: './pais-detail.component.html',
  styleUrls: ['./pais-detail.component.scss'],
})
export class PaisDetailComponent implements OnInit, OnDestroy {
  pais: Pais;
  inscricao: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private paisService: PaisService,
  ) {}

  ngOnInit() {
    this.inscricao = this.activatedRoute.params.subscribe((params: any) => {
      this.paisService
        .findById(params['id'])
        .subscribe(pais => (this.pais = pais));
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    // this.router.navigate(['/pais', this.pais.id, 'edit']);
  }
}
