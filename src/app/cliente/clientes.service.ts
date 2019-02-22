import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root',
  useClass: environment.production ? ClienteService : ClienteService,
  deps: [HttpClient],
})
export class ClienteService {
  constructor(protected http: HttpClient) {}

  getBaseUrl(): string {
    return environment.urlCliente();
  }
  getEntityName(): string {
    return 'Cliente';
  }
  newEntity(): Cliente {
    return new Cliente();
  }

  findAll(): Observable<Cliente[]> {
    console.log(this.getBaseUrl());
    return this.http.get<Cliente[]>(this.getBaseUrl());
  }

  findById(id: number): Observable<Cliente | null> {
    if (!Number.isInteger(id) || id < 0) {
      return of(this.newEntity());
    }

    return this.http.get<Cliente>(this.getBaseUrl() + `${id}`);
  }

  async create(newEntity: Cliente): Promise<Cliente> {
    const copy = Object.assign(newEntity);
    delete copy.id;

    const value = await this.http
      .post<Cliente>(this.getBaseUrl(), copy)
      .toPromise();

    return value;
  }

  async save(entity: Cliente): Promise<Cliente> {
    const value = await this.http
      .post<Cliente>(this.getBaseUrl(), entity)
      .toPromise();

    return value;
  }

  async remove(entity: Cliente): Promise<Cliente> {
    const value = await this.http
      .delete<Cliente>(this.getBaseUrl() + `${entity.id}`)
      .toPromise();
    return value;
  }
}
