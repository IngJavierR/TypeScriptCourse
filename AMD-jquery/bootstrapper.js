define(["require", "exports", "./alerter"], function (require, exports, al) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function run() {
        var alerter = new al.Alerter();
        alerter.showMessage();
    }
    exports.run = run;
});
//# sourceMappingURL=bootstrapper.js.map