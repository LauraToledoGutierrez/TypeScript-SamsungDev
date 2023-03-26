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

const persona1 = new Persona("Laura", "Toledo Gutierrez", 22, "12345678A", new Date(2001, 8, 8), "Rojo", "Mujer");
persona1.addDireccion(new Direccion("Calle Manzana", 3, 2, "A", "13300", "Valdepeñas", "Ciudad Real"));
persona1.addMail(new Mail("Personal", "lauratoledogutierrez@gmail.com"));
persona1.addTelefono(new Telefono("Móvil", "666666666"));
persona1.setNotas("Notas importantes, recetas");

const persona2 = new Persona("Celia", "Diaz Fernandez", 23, "87654321B", new Date(2000, 4, 3), "Verde", "Mujer");
persona2.addDireccion(new Direccion("Ronda de Calatrava", 8, 2, "C", "13003", "Ciudad Real", "Ciudad Real"));
persona2.addMail(new Mail( "Personal", "cedifer@gmail.com"));
persona2.addMail(new Mail( "Trabajo", "celiadiazfernandez@uclm.com"));
persona2.addTelefono(new Telefono( "Móvil", "666111222"));
persona2.addTelefono(new Telefono("Trabajo", "912345678"));
persona2.setNotas("Receta de mi madre");

const persona3 = new Persona("Carlos", "López Sevilla", 45, "11223344C", new Date(1978, 7, 15), "Amarillo", "Hombre");
persona3.addDireccion(new Direccion("Calle Almagro", 1, 3, "C", "13325", "Moral de Calatrava", "Ciudad Real"));
persona3.addMail(new Mail("Personal", "carloslopez.sevilla@gmail.com"));
persona3.addMail(new Mail("Trabajo", "c.lopezsevilla@uclm.com"));
persona3.addTelefono(new Telefono("Móvil", "666444222"));
persona3.addTelefono(new Telefono("Trabajo", "987654321"));
persona3.setNotas("Horario de trabajo");

agenda.agregarPersona(persona1);
agenda.agregarPersona(persona2);
agenda.agregarPersona(persona3);

//console.log(JSON.stringify(persona1, null, 2));
console.log("-------- PERSONA 1 --------")
console.log(persona1.toString())
console.log("-------- PERSONA 2 --------")
console.log(persona2.toString());
console.log("-------- PERSONA 3 --------")
console.log(persona3.toString());

rl.question('Indique el DNI de la persona que desea modificar: ', (dni: string) => {
    const personaAModificar = agenda.buscarPersonaPorDni(dni);
  
    if (personaAModificar) {
        rl.question('Ingrese la nueva dirección (Formato a seguir: calle, número, piso, letra, código postal, ciudad, provincia): ', (nuevaDireccionStr: string) => {
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
      
          rl.question('Ingrese el nuevo mail (Formato a seguir: tipo, dirección): ', (nuevoMailStr: string) => {
            const nuevoMailArray = nuevoMailStr.split(',');
            const nuevoMail = new Mail(nuevoMailArray[0].trim(), nuevoMailArray[1].trim());
            personaAModificar.addMail(nuevoMail);
      
            rl.question('Ingrese el nuevo teléfono (Formato a seguir: tipo, número): ', (nuevoTelefonoStr: string) => {
              const nuevoTelefonoArray = nuevoTelefonoStr.split(',');
              const nuevoTelefono = new Telefono(nuevoTelefonoArray[0].trim(), nuevoTelefonoArray[1].trim());
              personaAModificar.addTelefono(nuevoTelefono);
      
              console.log('Persona modificada con éxito:', personaAModificar.toString());
              rl.close();
            });
          });
        });
      } else {
        console.log(`No se ha encontrado ninguna persona con el DNI indicado ${dni}`);
        rl.close();
      }
  });
  