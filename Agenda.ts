import { Persona } from "./Persona";
import { Direccion } from './Direccion';
import { Telefono } from './Telefono';
import { Mail } from './Mail';

export class Agenda {
  private personas: Persona[];

  constructor() {
    this.personas = [];
  }

  public agregarPersona(persona: Persona): void {
    this.personas.push(persona);
  }

  public buscarPersonaPorDni(dni: string): Persona | undefined {
    return this.personas.find((persona) => persona.getDni() === dni);
  }
  
  public modificarPersona(
    dni: string,
    nuevaDireccion: Direccion,
    nuevoTelefono: Telefono,
    nuevoMail: Mail
  ): void {
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
