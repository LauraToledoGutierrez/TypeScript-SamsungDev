import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";


function crearPersonas(): Persona[]{
    const dir1 = new Direccion('Calle1', '123', '2C', 'Valdepeñas');

    const mail1 = new Mail('dddd@gmail.com', 'Persona1');

    const tlf1 = new Telefono('555-1234', 'Casa');

    const persona1 = new Persona('SSSS', 'aaaa', 42, '11111', new Date(1979,2,25),'Azul', 'Masculino', dir1, mail1, tlf1, 'Notas');

    return [persona1];
}

crearPersonas().forEach(persona => {
    console.log(persona.getDatos());
});