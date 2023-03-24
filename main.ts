import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";
import { Agenda } from "./Agenda";
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const agenda = new Agenda();

const persona1 = new Persona("Juan", "Pérez", 25, "12345678A", new Date(1997, 5, 20), "azul", "Hombre");
persona1.addDireccion(new Direccion("Calle Falsa", 123, 4, "A", "28001", "Madrid", "Madrid"));
persona1.addMail(new Mail("Personal", "juanperez@gmail.com"));
persona1.addTelefono(new Telefono("Móvil", "666666666"));
persona1.setNotas("Notas sobre Juan Pérez");

const persona2 = new Persona("María", "García", 30, "87654321B", new Date(1992, 3, 15), "verde", "Mujer");
persona2.addDireccion(new Direccion("Avenida Principal", 456, 2, "B", "08001", "Barcelona", "Barcelona"));
persona2.addMail(new Mail( "Personal", "mariagarcia@gmail.com"));
persona2.addMail(new Mail( "Trabajo", "m.garcia@empresa.com"));
persona2.addTelefono(new Telefono( "Móvil", "666777888"));
persona2.addTelefono(new Telefono("Trabajo", "912345678"));
persona2.setNotas("Notas sobre María García");

const persona3 = new Persona("Carlos", "López", 45, "11111111C", new Date(1978, 9, 5), "rojo", "Hombre");
persona3.addDireccion(new Direccion("Calle Principal", 789, 3, "C", "46001", "Valencia", "Valencia"));
persona3.addMail(new Mail("Personal", "carloslopez@gmail.com"));
persona3.addMail(new Mail("Trabajo", "c.lopez@empresa.com"));
persona3.addTelefono(new Telefono("Móvil", "666444222"));
persona3.addTelefono(new Telefono("Trabajo", "987654321"));
persona3.setNotas("Notas sobre Carlos López");

agenda.agregarPersona(persona1);
agenda.agregarPersona(persona2);
agenda.agregarPersona(persona3);

console.log(persona1);
console.log(persona2);
console.log(persona3);

rl.question('Ingrese el DNI de la persona que desea modificar: ', (dni: string) => {
    const personaAModificar = agenda.buscarPersonaPorDni(dni);
  
    if (personaAModificar) {
        rl.question('Ingrese la nueva dirección de la persona (formato: calle, número, piso, letra, código postal, ciudad, provincia): ', (nuevaDireccionStr: string) => {
          const nuevaDireccionArray = nuevaDireccionStr.split(',');
          const nuevaDireccion = new Direccion(
            nuevaDireccionArray[0].trim(),
            Number(nuevaDireccionArray[1].trim()),
            Number(nuevaDireccionArray[2].trim()),
            nuevaDireccionArray[3].trim(),
            nuevaDireccionArray[4].trim(),
            nuevaDireccionArray[5].trim(),
            nuevaDireccionArray[6].trim()
          );
          personaAModificar.addDireccion(nuevaDireccion);
      
          rl.question('Ingrese el nuevo mail de la persona (formato: tipo, dirección): ', (nuevoMailStr: string) => {
            const nuevoMailArray = nuevoMailStr.split(',');
            const nuevoMail = new Mail(nuevoMailArray[0].trim(), nuevoMailArray[1].trim());
            personaAModificar.addMail(nuevoMail);
      
            rl.question('Ingrese el nuevo teléfono de la persona (formato: tipo, número): ', (nuevoTelefonoStr: string) => {
              const nuevoTelefonoArray = nuevoTelefonoStr.split(',');
              const nuevoTelefono = new Telefono(nuevoTelefonoArray[0].trim(), nuevoTelefonoArray[1].trim());
              personaAModificar.addTelefono(nuevoTelefono);
      
              console.log('Persona modificada con éxito:', personaAModificar);
              rl.close();
            });
          });
        });
      } else {
        console.log(`No se ha encontrado ninguna persona con DNI ${dni}`);
        rl.close();
      }
  });
  