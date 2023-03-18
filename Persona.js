"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, DNI, cumpleaños, colorFavorito, sexo, direcciones, mails, telefono, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.DNI = DNI;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefono = telefono;
        this.notas = notas;
    }
    Persona.prototype.getDatos = function () {
        var fechaNacimiento = "".concat(this.cumpleaños.getDate(), "/").concat(this.cumpleaños.getMonth() + 1, "/").concat(this.cumpleaños.getFullYear());
        var datosPersona = "Nombre completo: ".concat(this.nombre, " ").concat(this.apellidos, "\n");
        datosPersona += "Edad: ".concat(this.edad, "\n");
        datosPersona += "DNI: ".concat(this.DNI);
        datosPersona += "Fecha de nacimiento: ".concat(fechaNacimiento, "\n");
        datosPersona += "Color favorito: ".concat(this.colorFavorito, "\n");
        datosPersona += "Sexo: ".concat(this.sexo, "\n");
        return datosPersona;
    };
    return Persona;
}());
exports.Persona = Persona;
