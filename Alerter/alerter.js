/// <reference path="../node_modules/@types/toastr/index.d.ts"/>
/// <reference path="data-service.ts"/>
var dataservice = new DataService();
var Alerter = (function () {
    function Alerter() {
        this.name = 'John';
    }
    Alerter.prototype.showMessage = function () {
        var msg = dataservice.getMessage();
        toastr.info(msg + ', ' + this.name);
    };
    return Alerter;
}());
//# sourceMappingURL=alerter.js.map