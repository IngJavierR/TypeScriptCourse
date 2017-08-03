define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataService = (function () {
        function DataService() {
            this.msg = 'Welcome to the show!';
        }
        DataService.prototype.getMessage = function () { return this.msg; };
        return DataService;
    }());
    exports.DataService = DataService;
});
//# sourceMappingURL=data-service.js.map