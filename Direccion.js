"use strict";
exports.__esModule = true;
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, ciudad, codigoPostal, pais) {
        this.calle = calle;
        this.ciudad = ciudad;
        this.codigoPostal = codigoPostal;
        this.pais = pais;
    }
    Direccion.prototype.getDireccionCompleta = function () {
        var direccion = "".concat(this.calle, ", ").concat(this.ciudad, ", ").concat(this.codigoPostal, ", ").concat(this.pais);
        return direccion;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
