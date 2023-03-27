"use strict";
exports.__esModule = true;
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
var Agenda_1 = require("./Agenda");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var agenda = new Agenda_1.Agenda();
printPerson(createPerson());
ask();
function createPerson() {
    var persona1 = new Persona_1.Persona("Laura", "Toledo Gutierrez", 22, "12345678A", new Date(2001, 8, 8), "Rojo", "Mujer");
    persona1.addDireccion(new Direccion_1.Direccion("Calle Manzana", 3, 2, "A", "13300", "Valdepeñas", "Ciudad Real"));
    persona1.addMail(new Mail_1.Mail("Personal", "lauratoledogutierrez@gmail.com"));
    persona1.addTelefono(new Telefono_1.Telefono("Móvil", "666666666"));
    persona1.setNotas("Notas importantes, recetas");
    var persona2 = new Persona_1.Persona("Celia", "Diaz Fernandez", 23, "87654321B", new Date(2000, 4, 3), "Verde", "Mujer");
    persona2.addDireccion(new Direccion_1.Direccion("Ronda de Calatrava", 8, 2, "C", "13003", "Ciudad Real", "Ciudad Real"));
    persona2.addMail(new Mail_1.Mail("Personal", "cedifer@gmail.com"));
    persona2.addMail(new Mail_1.Mail("Trabajo", "celiadiazfernandez@uclm.com"));
    persona2.addTelefono(new Telefono_1.Telefono("Móvil", "666111222"));
    persona2.addTelefono(new Telefono_1.Telefono("Trabajo", "912345678"));
    persona2.setNotas("Receta de mi madre");
    var persona3 = new Persona_1.Persona("Carlos", "López Sevilla", 45, "11223344C", new Date(1978, 7, 15), "Amarillo", "Hombre");
    persona3.addDireccion(new Direccion_1.Direccion("Calle Almagro", 1, 3, "C", "13325", "Moral de Calatrava", "Ciudad Real"));
    persona3.addMail(new Mail_1.Mail("Personal", "carloslopez.sevilla@gmail.com"));
    persona3.addMail(new Mail_1.Mail("Trabajo", "c.lopezsevilla@uclm.com"));
    persona3.addTelefono(new Telefono_1.Telefono("Móvil", "666444222"));
    persona3.addTelefono(new Telefono_1.Telefono("Trabajo", "987654321"));
    persona3.setNotas("Horario de trabajo");
    var personas = [persona1, persona2, persona3];
    agenda.agregarPersona(persona1);
    agenda.agregarPersona(persona2);
    agenda.agregarPersona(persona3);
    return personas;
}
function printPerson(personas) {
    personas.forEach(function (persona, index) {
        console.log("-------- PERSONA ".concat(index + 1, " --------"));
        console.log(persona.toString());
        console.log("---------------------------");
    });
}
function ask() {
    rl.question('¿Desea modificar una persona? (si/no): ', function (respuesta) {
        if (respuesta.toLowerCase() === 'si') {
            rl.question('Indique el DNI de la persona que desea modificar: ', function (dni) {
                var personaAModificar = agenda.buscarPersonaPorDni(dni);
                if (personaAModificar) {
                    rl.question('Ingrese la nueva dirección (Formato a seguir: calle, número, piso, letra, código postal, ciudad, provincia): ', function (nuevaDireccionStr) {
                        try {
                            var nuevaDireccionArray = nuevaDireccionStr.split(',');
                            var nuevaDireccion = new Direccion_1.Direccion(nuevaDireccionArray[0].trim(), Number(nuevaDireccionArray[1].trim()), Number(nuevaDireccionArray[2].trim()), nuevaDireccionArray[3].trim(), nuevaDireccionArray[4].trim(), nuevaDireccionArray[5].trim(), nuevaDireccionArray[6].trim());
                            personaAModificar.addDireccion(nuevaDireccion);
                            console.log("---------------------------");
                            rl.question('Ingrese el nuevo mail (Formato a seguir: tipo, dirección): ', function (nuevoMailStr) {
                                try {
                                    var nuevoMailArray = nuevoMailStr.split(',');
                                    var nuevoMail = new Mail_1.Mail(nuevoMailArray[0].trim(), nuevoMailArray[1].trim());
                                    personaAModificar.addMail(nuevoMail);
                                    console.log("---------------------------");
                                    rl.question('Ingrese el nuevo teléfono (Formato a seguir: tipo, número): ', function (nuevoTelefonoStr) {
                                        var nuevoTelefonoArray = nuevoTelefonoStr.split(',');
                                        var nuevoTelefono = new Telefono_1.Telefono(nuevoTelefonoArray[0].trim(), nuevoTelefonoArray[1].trim());
                                        personaAModificar.addTelefono(nuevoTelefono);
                                        console.log("---------------------------");
                                        console.log("---------------------------");
                                        console.log('PERSONA MODIFICADA CON EXITO:', personaAModificar.toString());
                                        ask();
                                    });
                                }
                                catch (error2) {
                                    console.error('Error: Formato de email incorrecto');
                                    ask(); // Llamada recursiva para volver a preguntar por el mail
                                }
                            });
                        }
                        catch (error) {
                            console.error('Error: Formato de direccion incorrecto');
                            ask(); // Llamada recursiva para volver a preguntar por la dirección
                        }
                    });
                }
                else {
                    console.log("No se ha encontrado ninguna persona con el DNI indicado ".concat(dni));
                    rl.close();
                }
            });
        }
        else if (respuesta.toLowerCase() === 'no') {
            rl.close();
        }
        else {
            console.log('Respuesta inválida. Por favor, responda "si" o "no".');
            ask();
        }
    });
}
