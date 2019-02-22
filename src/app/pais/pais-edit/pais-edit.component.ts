import { Component, OnDestroy, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pais } from '../pais.model';
import { PaisService } from '../pais.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-pais-edit',
  templateUrl: './pais-edit.component.html',
  styleUrls: ['./pais-edit.component.scss'],
})
export class PaisEditComponent implements OnInit, OnDestroy {
  pais: Pais = new Pais();

  paisFormControl = new FormControl(new Pais());

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private paisService: PaisService,
  ) {}

  navigateToId(newId: number | string) {
    return this.router.navigate(['..', newId.toString()], {
      relativeTo: this.activatedRoute,
    });
  }

  ngOnInit() {}

  ngOnDestroy() {}

  onSubmit() {
    this.paisService.save(this.pais);
    this.voltar();
  }

  voltar() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
