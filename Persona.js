"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo) {
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
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.getFechaNacimiento = function () {
        return this.cumpleaños;
    };
    Persona.prototype.getColorFavorito = function () {
        return this.colorFavorito;
    };
    Persona.prototype.getGenero = function () {
        return this.sexo;
    };
    Persona.prototype.getDirecciones = function () {
        return this.direcciones;
    };
    Persona.prototype.getMails = function () {
        return this.mails;
    };
    Persona.prototype.getTelefonos = function () {
        return this.telefonos;
    };
    Persona.prototype.getNotas = function () {
        return this.notas;
    };
    Persona.prototype.setNotas = function (notas) {
        this.notas = notas;
    };
    Persona.prototype.addDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.addMail = function (mail) {
        this.mails.push(mail);
    };
    Persona.prototype.addTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    Persona.prototype.toString = function () {
        return "- Nombre: ".concat(this.nombre, " ").concat(this.apellidos, "\n") +
            "- Edad: ".concat(this.edad, "\n") +
            "- DNI: ".concat(this.dni, "\n") +
            "- Edad: ".concat(this.edad, "\n") +
            "- Cumplea\u00F1os ".concat(this.cumpleaños.toLocaleDateString(), "\n") +
            "- Color Favorito: ".concat(this.colorFavorito, "\n") +
            "- Sexo: ".concat(this.sexo, "\n") +
            "- Direcciones:\n".concat(this.direcciones.toString(), " \n") +
            "- Mails:\n".concat(this.mails.toString(), " \n") +
            "- Tel\u00E9fonos:\n".concat(this.telefonos.toString(), " \n") +
            "- Notas: ".concat(this.notas, "\n");
    };
    return Persona;
}());
exports.Persona = Persona;
