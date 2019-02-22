import { BasicEntity } from 'src/model/BasicEntity';

export class Pais extends BasicEntity {
  constructor(public id: number = -1, public nome: string = '') {
    super();
  }
}
