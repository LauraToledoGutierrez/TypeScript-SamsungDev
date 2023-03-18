import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";
export class Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    DNI: string;
    cumpleaños: Date;
    colorFavorito: String;
    sexo: String;
    direcciones: Direccion;
    mails: Mail;
    telefono: Telefono;
    notas: String;

    constructor(nombre: string, apellidos: string, edad: number, DNI: string, cumpleaños: Date, colorFavorito: String, sexo: String, direcciones: Direccion, mails: Mail, telefono: Telefono, notas: string){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.DNI =DNI;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefono = telefono;
        this.notas = notas;
    }

    getDatos(): string {
        const fechaNacimiento = `${this.cumpleaños.getDate()}/${this.cumpleaños.getMonth()+1}/${this.cumpleaños.getFullYear()}`;
        
        let datosPersona = `Nombre completo: ${this.nombre} ${this.apellidos}\n`;
        datosPersona += `Edad: ${this.edad}\n`;
        datosPersona += `DNI: ${this.DNI}`;
        datosPersona += `Fecha de nacimiento: ${fechaNacimiento}\n`;
        datosPersona += `Color favorito: ${this.colorFavorito}\n`;
        datosPersona += `Sexo: ${this.sexo}\n`;

       return datosPersona;


    }
} 