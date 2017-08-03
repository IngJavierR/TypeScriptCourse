/// <reference path="../node_modules/@types/toastr/index.d.ts"/>
/// <reference path="../node_modules/@types/jquery/index.d.ts"/>
define(["require", "exports", "./data-service"], function (require, exports, ds) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dataservice = new ds.DataService();
    var Alerter = (function () {
        function Alerter() {
            this.name = 'John';
        }
        Alerter.prototype.showMessage = function () {
            var msg = dataservice.getMessage();
            $("#messagebox").text(msg + ', ' + this.name);
            toastr.info(msg + ', ' + this.name);
        };
        return Alerter;
    }());
    exports.Alerter = Alerter;
});
//# sourceMappingURL=alerter.js.map