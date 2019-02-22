import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Pais } from './pais.model';

@Injectable({
  providedIn: 'root',
  useClass: environment.production ? PaisService : PaisService,
  deps: [HttpClient],
})
export class PaisService {
  constructor(protected http: HttpClient) {}

  getBaseUrl(): string {
    return environment.urlPais();
  }
  getEntityName(): string {
    return 'Pais';
  }
  newEntity(): Pais {
    return new Pais();
  }

  findAll(): Observable<Pais[]> {
    console.log(this.getBaseUrl());
    return this.http.get<Pais[]>(this.getBaseUrl());
  }

  findById(id: number): Observable<Pais | null> {
    if (!Number.isInteger(id) || id < 0) {
      return of(this.newEntity());
    }

    return this.http.get<Pais>(this.getBaseUrl() + `${id}`);
  }

  async create(newEntity: Pais): Promise<Pais> {
    const copy = Object.assign(newEntity);
    delete copy.id;

    const value = await this.http
      .post<Pais>(this.getBaseUrl(), copy)
      .toPromise();

    return value;
  }

  async save(entity: Pais): Promise<Pais> {
    const value = await this.http
      .post<Pais>(this.getBaseUrl(), entity)
      .toPromise();

    return value;
  }

  async remove(entity: Pais): Promise<Pais> {
    const value = await this.http
      .delete<Pais>(this.getBaseUrl() + `${entity.id}`)
      .toPromise();
    return value;
  }
}
