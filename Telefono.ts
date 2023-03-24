import { ITelefono } from './ITelefono';

export class Telefono implements ITelefono {
  constructor(public tipo: string, public numero: string) {}
}
