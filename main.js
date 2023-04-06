"use strict";
/* Práctica TypeScript Samsung Desarrolladoras*/
exports.__esModule = true;
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
var Agenda_1 = require("./Agenda");
var readline = require("readline");
/* Creamos la instancia de readline para leer la entrada desde la consola */
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/* Creamos la instancia de la clase Agenda utilizada para almacenar las personas */
var agenda = new Agenda_1.Agenda();
/* Llamada al metodo printPerson para imprimir los detalles de las personas */
printPerson(createPerson());
/* Llamada al metodo ask para pedir al usuario que realice una accion */
ask();
/* Metodo para crear a las personas */
function createPerson() {
    /* Crearemos a las personas dandole la informacion de los atributos */
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
    /* Agregamos a las personas creadas a la agenda */
    agenda.agregarPersona(persona1);
    agenda.agregarPersona(persona2);
    agenda.agregarPersona(persona3);
    return personas;
}
/* Metodo para imprimir la informacion de las personas */
function printPerson(personas) {
    personas.forEach(function (persona, index) {
        console.log("-------- PERSONA ".concat(index + 1, " --------"));
        console.log(persona.toString());
        console.log("---------------------------");
    });
}
/* Metodo usado para pedir al usuario si quiere modificar una persona y realizar esa modificacion */
function ask() {
    /* Pedimos si quiere modificar */
    rl.question('¿Desea modificar una persona? (si/no): ', function (respuesta) {
        /* Si la respuesta es si, pediremos al usuario que ingrese los datos */
        if (respuesta.toLowerCase() === 'si') {
            /* Pedimos el DNI de la persona que queremos modificar */
            rl.question('Indique el DNI de la persona que desea modificar: ', function (dni) {
                /* Buscamos a la persona haciendo uso del metodo creado en la clase agenda*/
                var personaAModificar = agenda.buscarPersonaPorDni(dni);
                /* Si existe una persona con ese dni*/
                if (personaAModificar) {
                    /* Pedimos que ingrese la direccion */
                    rl.question('Ingrese la nueva dirección (Formato a seguir: calle, número, piso, letra, código postal, ciudad, provincia): ', function (nuevaDireccionStr) {
                        /* Por medio de las excepciones controlaremos si se ingresan los datos en el formato correcto */
                        try {
                            /* Dividimos la cadena en un array utilizando la como como separador con el metodo split */
                            var nuevaDireccionArray = nuevaDireccionStr.split(',');
                            /* Creamos un objeto Direccion con los elementos del array */
                            var nuevaDireccion = new Direccion_1.Direccion(
                            /* El metodo trim sirve para eliminar los espacios en blanco al principio y al final de cada cadena */
                            nuevaDireccionArray[0].trim(), Number(nuevaDireccionArray[1].trim()), Number(nuevaDireccionArray[2].trim()), nuevaDireccionArray[3].trim(), nuevaDireccionArray[4].trim(), nuevaDireccionArray[5].trim(), nuevaDireccionArray[6].trim());
                            /* Añadimos la nueva direccion a la persona indicada */
                            personaAModificar.addDireccion(nuevaDireccion);
                            console.log("---------------------------");
                            /* Salta si se introduce un formato incorrecto */
                        }
                        catch (error) {
                            console.log('Error:', "Formato de direccion incorrecta");
                            ask();
                        }
                        ;
                        /* Pedimos que ingrese el email */
                        rl.question('Ingrese el nuevo mail (Formato a seguir: tipo, dirección): ', function (nuevoMailStr) {
                            /* Por medio de las excepciones controlaremos si se ingresan los datos en el formato correcto */
                            try {
                                /* Dividimos la cadena en un array utilizando la como como separador con el metodo split */
                                var nuevoMailArray = nuevoMailStr.split(',');
                                var nuevoMail = new Mail_1.Mail(nuevoMailArray[0].trim(), nuevoMailArray[1].trim());
                                /* Añadimos el nuevo email a la persona indicada */
                                personaAModificar.addMail(nuevoMail);
                                console.log("---------------------------");
                                /* Salta si se introduce un formato incorrecto */
                            }
                            catch (error) {
                                console.log('Error:', "Formato de direccion de email incorrecta");
                                ask();
                            }
                            /* Pedimos que ingrese el telefono */
                            rl.question('Ingrese el nuevo teléfono (Formato a seguir: tipo, número): ', function (nuevoTelefonoStr) {
                                /* Por medio de las excepciones controlaremos si se ingresan los datos en el formato correcto */
                                try {
                                    /* Dividimos la cadena en un array utilizando la como como separador con el metodo split */
                                    var nuevoTelefonoArray = nuevoTelefonoStr.split(',');
                                    var nuevoTelefono = new Telefono_1.Telefono(nuevoTelefonoArray[0].trim(), nuevoTelefonoArray[1].trim());
                                    /* Añadimos el nuevo telefono a la persona indicada */
                                    personaAModificar.addTelefono(nuevoTelefono);
                                    console.log("---------------------------");
                                    /* No se ha producido ningun error, asi que la persona se ha modificado con exito*/
                                    console.log('PERSONA MODIFICADA CON EXITO:', personaAModificar.toString());
                                    ask();
                                    /* Salta si se introduce un formato incorrecto */
                                }
                                catch (error) {
                                    console.log('Error:', "Formato de telefono incorrecto");
                                }
                            });
                        });
                    });
                    /* Si no se ha encontrado a ninguna persona con el DNI indicado, se vuelve a preguntar */
                }
                else {
                    console.log("No se ha encontrado ninguna persona con el DNI indicado ".concat(dni));
                    ask();
                }
            });
            /* Si no se quiere modificar ninguna persona, sale de la aplicacion*/
        }
        else if (respuesta.toLowerCase() === 'no') {
            rl.close();
            console.log('Gracias por usar la aplicación, hasta pronto.');
        }
        else {
            console.log('Respuesta inválida. Por favor, responda "si" o "no".');
            ask();
        }
    });
}
