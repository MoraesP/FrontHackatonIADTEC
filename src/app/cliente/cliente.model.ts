import { BasicEntity } from 'src/model/BasicEntity';

export class Cliente extends BasicEntity {
  constructor(
    public id: number = -1,
    public nome: string = '',
    public cpf: string = '',
    public nascimento: Date = new Date(),
    public email: string = '',
    public situacao: number = 1,
    public estado: string = 'Parana',
  ) {
    super();
  }
}
