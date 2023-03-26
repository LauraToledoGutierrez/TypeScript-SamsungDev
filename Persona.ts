import { Direccion } from './Direccion';
import { Telefono } from './Telefono';
import { Mail } from './Mail';

export class Persona {
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: string;
    private cumpleaños: Date;
    private colorFavorito: string;
    private sexo: string;
    private direcciones: Direccion[];
    private mails: Mail[];
    private telefonos: Telefono[];
    private notas: string;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleaños: Date, colorFavorito: string, sexo: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = [];
        this.mails = [];
        this.telefonos = [];
        this.notas = "";
  }

  getNombre(): string {
    return this.nombre;
  }

  getApellido(): string {
    return this.apellidos;
  }

  getEdad(): number {
    return this.edad;
  }

  getDni(): string {
    return this.dni;
  }

  getFechaNacimiento(): Date {
    return this.cumpleaños;
  }

  getColorFavorito(): string {
    return this.colorFavorito;
  }

  getGenero(): string {
    return this.sexo;
  }

  getDirecciones(): Direccion[] {
    return this.direcciones;
  }

  getMails(): Mail[] {
    return this.mails;
  }

  getTelefonos(): Telefono[] {
    return this.telefonos;
  }

  getNotas(): string {
    return this.notas;
  }

  setNotas(notas: string): void {
    this.notas = notas;
  }

  addDireccion(direccion: Direccion): void {
    this.direcciones.push(direccion);
  }

  addMail(mail: Mail): void {
    this.mails.push(mail);
  }

  addTelefono(telefono: Telefono): void {
    this.telefonos.push(telefono);
  }

  toString(): string {

    return `- Nombre: ${this.nombre} ${this.apellidos}\n` +
           `- Edad: ${this.edad}\n` +
           `- DNI: ${this.dni}\n` +
           `- Edad: ${this.edad}\n` +
           `- Cumpleaños ${this.cumpleaños.toLocaleDateString()}\n` +
           `- Color Favorito: ${this.colorFavorito}\n` +
           `- Sexo: ${this.sexo}\n` +
           `- Direcciones:\n${this.direcciones.toString()}\n` +
           `- Mails:\n${this.mails.toString()}\n` +
           `- Teléfonos:\n${this.telefonos.toString()}\n` +
           `- Notas: ${this.notas}\n`;
  }
}
