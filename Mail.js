"use strict";
exports.__esModule = true;
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    Mail.prototype.getTipo = function () {
        return this.tipo;
    };
    Mail.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Mail.prototype.getDireccion = function () {
        return this.direccion;
    };
    Mail.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Mail.prototype.toString = function () {
        return "".concat(this.tipo, ", ").concat(this.direccion);
    };
    return Mail;
}());
exports.Mail = Mail;
