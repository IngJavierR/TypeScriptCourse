/// <reference path="../node_modules/@types/toastr/index.d.ts"/>
var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        Rectangle.prototype.getArea = function () { return this.height * this.width; };
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var rect = new Shapes.Rectangle(10, 4);
var area = rect.getArea();
toastr.info('area = ' + area);
//# sourceMappingURL=internal-module.js.map