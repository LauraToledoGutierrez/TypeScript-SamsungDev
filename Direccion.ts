
export class Direccion {
    calle: string;
    ciudad: string;
    codigoPostal: string;
    pais: string;
    
    constructor(calle: string, ciudad: string, codigoPostal: string, pais: string){
        this.calle = calle;
        this.ciudad = ciudad;
        this.codigoPostal = codigoPostal;
        this.pais = pais;
    }

    getDireccionCompleta(): string {
        let direccion = `${this.calle}, ${this.ciudad}, ${this.codigoPostal}, ${this.pais}`;
        return direccion;
    }

}