/* Clase Telefono */
export class Telefono {
  /* Atributos de la clase telefono*/
  tipo: string;
  numero: string;

  /* Metodo constructor de la clase telefono*/
  constructor(tipo: string, numero: string){
    this.tipo = tipo;
    this.numero = numero;
  }

  /* Metodos setters y getters*/
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

  /* Metodo para imprimir el atributo telefono con formato */
  public toString(): string{
    return `${this.tipo}, ${this.numero}\n`;
  }
}