/* Clase Direccion */
export class Direccion {
  /* Atributos de la clase direccion */
  private calle: string;
  private numero: number;
  private piso: number;
  private letra: string;
  private codigoPostal: string;
  private poblacion: string;
  private provincia: string;

  /* Constructor de la clase direccion */
  constructor(calle: string, numero: number, piso: number, letra: string, codigoPostal: string, poblacion: string, provincia: string) {
    this.calle = calle;
    this.numero = numero;
    this.piso = piso;
    this.letra = letra;
    this.codigoPostal = codigoPostal;
    this.poblacion = poblacion;
    this.provincia = provincia;
  }
  /* Metodos getters y setters */
  public getCalle(): string {
    return this.calle;
  }

  public setCalle(calle: string): void {
    this.calle = calle;
  }

  public getNumero(): number {
    return this.numero;
  }

  public setNumero(numero: number): void {
    this.numero = numero;
  }

  public getPiso(): number {
    return this.piso;
  }

  public setPiso(piso: number): void {
    this.piso = piso;
  }

  public getLetra(): string {
    return this.letra;
  }

  public setLetra(letra: string): void {
    this.letra = letra;
  }

  public getCodigoPostal(): string {
    return this.codigoPostal;
  }

  public setCodigoPostal(codigoPostal: string): void {
    this.codigoPostal = codigoPostal;
  }

  public getPoblacion(): string {
    return this.poblacion;
  }

  public setPoblacion(poblacion: string): void {
    this.poblacion = poblacion;
  }

  public getProvincia(): string {
    return this.provincia;
  }

  public setProvincia(provincia: string): void {
    this.provincia = provincia;
  }

  /* Metodo para imprimir la direccion con formato */
  public toString(): string {
    return `${this.calle}, ${this.numero}, ${this.piso}, ${this.letra}, ${this.codigoPostal}, ${this.poblacion}, ${this.provincia}\n`;
  }
  
}
