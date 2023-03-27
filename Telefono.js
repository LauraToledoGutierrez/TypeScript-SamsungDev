"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    Telefono.prototype.getTipo = function () {
        return this.tipo;
    };
    Telefono.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Telefono.prototype.getNumero = function () {
        return this.numero;
    };
    Telefono.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Telefono.prototype.toString = function () {
        return "".concat(this.tipo, ", ").concat(this.numero, "\n");
    };
    return Telefono;
}());
exports.Telefono = Telefono;
