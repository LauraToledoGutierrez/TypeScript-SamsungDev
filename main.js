"use strict";
exports.__esModule = true;
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Telefono_1 = require("./Telefono");
function crearPersonas() {
    var dir1 = new Direccion_1.Direccion('Calle1', '123', '2C', 'Valdepeñas');
    var mail1 = new Mail_1.Mail('dddd@gmail.com', 'Persona1');
    var tlf1 = new Telefono_1.Telefono('555-1234', 'Casa');
    var persona1 = new Persona_1.Persona('SSSS', 'aaaa', 42, '11111', new Date(1979, 2, 25), 'Azul', 'Masculino', dir1, mail1, tlf1, 'Notas');
    return [persona1];
}
crearPersonas().forEach(function (persona) {
    console.log(persona.getDatos());
});
