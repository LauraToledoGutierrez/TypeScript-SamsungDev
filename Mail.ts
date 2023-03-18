
export class Mail {
    direccion: string;
    tipo: string;

    constructor(direccion: string, tipo: string){
        this.direccion = direccion;
        this.tipo = tipo;
    }

    getEmail() : string {
        let email = `${this.tipo}, ${this.direccion}`;
        return email;
    }
}