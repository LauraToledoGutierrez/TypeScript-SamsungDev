"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(numero, tipo) {
        this.numero = numero;
        this.tipo = tipo;
    }
    Telefono.prototype.getTelefono = function () {
        var telefono = "".concat(this.tipo, ", ").concat(this.numero);
        return telefono;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
