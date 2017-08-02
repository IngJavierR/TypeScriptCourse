var demo_02_07;
(function (demo_02_07) {
    var squareItSimple = function (h, w) {
        return h * w;
    };
    var squareItSimplest = function (h, w) { return h * w; };
    var helloWorld;
    helloWorld = function (name) {
        console.log('Hello ' + (name || ' unknow person'));
    };
    helloWorld();
    helloWorld('Javier');
    var rectA = { h: 10 };
    var rectB = { h: 10, w: 5 };
    var squareIt;
    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
})(demo_02_07 || (demo_02_07 = {}));
//# sourceMappingURL=functions.js.map