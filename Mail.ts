export class Mail {
  tipo: string;
  direccion: string;

  constructor(
    tipo: string, direccion: string
  ) {
    this.tipo = tipo;
    this.direccion = direccion;
  }

  public getTipo(): string {
    return this.tipo;
  }
  public setTipo(tipo: string): void {
    this.tipo = tipo;
  }

  public getDireccion(): string{
    return this.direccion;
  }

  public setDireccion(direccion: string): void {
    this.direccion = direccion;
  }

  public toString(): string{
    return `${this.tipo}, ${this.direccion}\n`;
  }
}

