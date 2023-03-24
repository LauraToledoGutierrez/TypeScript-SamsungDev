import { IDireccion } from './IDireccion';

export class Direccion implements IDireccion {
  constructor(
    public calle: string,
    public numero: number,
    public piso: number,
    public letra: string,
    public codigoPostal: string,
    public poblacion: string,
    public provincia: string
  ) {}
}
