"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ej1ClaseSuperior_1 = require("./ej1ClaseSuperior");
//let elementos : any =[ [12, "Construido", true, "sin datos", 0, "Tema 1"],  [15, "En obra", false, "sin datos", 1, "Tema 2"], [20, "Proyectado", true, "sin datos", 2, "Tema 1"]] 
var Inferior = /** @class */ (function (_super) {
    __extends(Inferior, _super);
    //funcionalidad
    function Inferior(a, b, c, d, e) {
        var _this = _super.call(this, a, b, c) || this;
        _this.d = d;
        _this.e = e;
        return _this;
    }
    return Inferior;
}(ej1ClaseSuperior_1["default"]));
exports["default"] = Inferior;
