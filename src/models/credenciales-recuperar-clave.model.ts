import {Model, model, property} from '@loopback/repository';

@model()
export class CredencialesRecuperarClave extends Model {
  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  clave: string;


  constructor(data?: Partial<CredencialesRecuperarClave>) {
    super(data);
  }
}

export interface CredencialesRecuperarClaveRelations {
  // describe navigational properties here
}

export type CredencialesRecuperarClaveWithRelations = CredencialesRecuperarClave & CredencialesRecuperarClaveRelations;
