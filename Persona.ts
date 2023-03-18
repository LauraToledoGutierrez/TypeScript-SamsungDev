
class Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    DNI: string;
    cumpleaños: Date;
    colorFavorito: String;
    sexo: String;
    dirrecciones: Direccion;
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
        this.dirrecciones = direcciones;
        this.mails = mails;
        this.telefono = telefono;
        this.notas = notas;
    }
} 