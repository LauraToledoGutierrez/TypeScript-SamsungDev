
class Telefono {
    numero: string;
    tipo: string;

    constructor(numero: string, tipo: string){
        this.numero = numero;
        this.tipo = tipo;
    }

    getTelefono(): string {
        let telefono = `${this.tipo}, ${this.numero}`;
        return telefono;
    }
}