"use strict";
exports.__esModule = true;
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(direccion, tipo) {
        this.direccion = direccion;
        this.tipo = tipo;
    }
    Mail.prototype.getEmail = function () {
        var email = "".concat(this.tipo, ", ").concat(this.direccion);
        return email;
    };
    return Mail;
}());
exports.Mail = Mail;
