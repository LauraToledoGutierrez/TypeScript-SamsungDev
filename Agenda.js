"use strict";
exports.__esModule = true;
exports.Agenda = void 0;
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.personas = [];
    }
    Agenda.prototype.agregarPersona = function (persona) {
        this.personas.push(persona);
    };
    Agenda.prototype.buscarPersonaPorDni = function (dni) {
        return this.personas.find(function (persona) { return persona.getDni() === dni; });
    };
    Agenda.prototype.modificarPersona = function (dni, nuevaDireccion, nuevoTelefono, nuevoMail) {
        var personaAModificar = this.buscarPersonaPorDni(dni);
        if (personaAModificar) {
            personaAModificar.addDireccion(nuevaDireccion);
            personaAModificar.addTelefono(nuevoTelefono);
            personaAModificar.addMail(nuevoMail);
        }
        else {
            console.log("No se encontró ninguna persona con ese DNI.");
        }
    };
    return Agenda;
}());
exports.Agenda = Agenda;
