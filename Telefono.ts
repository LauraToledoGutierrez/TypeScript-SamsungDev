export class Telefono {
  tipo: string;
  numero: string;

  constructor(tipo: string, numero: string){
    this.tipo = tipo;
    this.numero = numero;
  }

  public getTipo(): string {
    return this.tipo;
  }
  public setTipo(tipo: string): void {
    this.tipo = tipo;
  }

  public getNumero(): string {
    return this.numero;
  }
  public setNumero(numero: string): void {
    this.numero = numero;
  }

  public toString(): string{
    return `${this.tipo}, ${this.numero}`;
  }
}