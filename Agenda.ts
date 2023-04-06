/* Clase Agenda usada para guardar a las personas */
import { Persona } from "./Persona";
import { Direccion } from './Direccion';
import { Telefono } from './Telefono';
import { Mail } from './Mail';

export class Agenda {
  /* Atributo de la clase agenda*/
  private personas: Persona[];

  /* Constructor de la clase agenda*/
  constructor() {
    this.personas = [];
  }
  /* Metodo para agregar personas a la agenda */
  public agregarPersona(persona: Persona): void {
    this.personas.push(persona);
  }

  /* Metodo para buscar a la persona con el dni introducido por el usuario */
  public buscarPersonaPorDni(dni: string): Persona | undefined {
    return this.personas.find((persona) => persona.getDni() === dni);
  }
  
  /* Metodo para modificar a la persona con los datos introducidos por el usuario */
  public modificarPersona(dni: string, nuevaDireccion: Direccion, nuevoTelefono: Telefono, nuevoMail: Mail): void {
    const personaAModificar = this.buscarPersonaPorDni(dni);
    if (personaAModificar) {
      personaAModificar.addDireccion(nuevaDireccion);
      personaAModificar.addTelefono(nuevoTelefono);
      personaAModificar.addMail(nuevoMail);
    } else {
      console.log("No se encontró ninguna persona con ese DNI.");
    }
  }
}
