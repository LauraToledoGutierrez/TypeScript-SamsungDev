/* Clase Mail */
export class Mail {

  /*Atributos de la clase mail*/
  tipo: string;
  direccion: string;

  /* Constructor de la clase mail */
  constructor(tipo: string, direccion: string) {
    this.tipo = tipo;
    this.direccion = direccion;
  }

  /* Metodos getters y setters */
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

  /* Para imprimir el atributo email con formato */
  public toString(): string{
    return `${this.tipo}, ${this.direccion}\n`;
  }
}

