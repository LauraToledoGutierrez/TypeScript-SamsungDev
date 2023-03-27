"use strict";
exports.__esModule = true;
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    Direccion.prototype.getCalle = function () {
        return this.calle;
    };
    Direccion.prototype.setCalle = function (calle) {
        this.calle = calle;
    };
    Direccion.prototype.getNumero = function () {
        return this.numero;
    };
    Direccion.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Direccion.prototype.getPiso = function () {
        return this.piso;
    };
    Direccion.prototype.setPiso = function (piso) {
        this.piso = piso;
    };
    Direccion.prototype.getLetra = function () {
        return this.letra;
    };
    Direccion.prototype.setLetra = function (letra) {
        this.letra = letra;
    };
    Direccion.prototype.getCodigoPostal = function () {
        return this.codigoPostal;
    };
    Direccion.prototype.setCodigoPostal = function (codigoPostal) {
        this.codigoPostal = codigoPostal;
    };
    Direccion.prototype.getPoblacion = function () {
        return this.poblacion;
    };
    Direccion.prototype.setPoblacion = function (poblacion) {
        this.poblacion = poblacion;
    };
    Direccion.prototype.getProvincia = function () {
        return this.provincia;
    };
    Direccion.prototype.setProvincia = function (provincia) {
        this.provincia = provincia;
    };
    Direccion.prototype.toString = function () {
        return "".concat(this.calle, ", ").concat(this.numero, ", ").concat(this.piso, ", ").concat(this.letra, ", ").concat(this.codigoPostal, ", ").concat(this.poblacion, ", ").concat(this.provincia, "\n");
    };
    return Direccion;
}());
exports.Direccion = Direccion;
