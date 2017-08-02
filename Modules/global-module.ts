/// <reference path="../node_modules/@types/toastr/index.d.ts"/>
declare var toastr: Toastr;
interface IPoint{
    getDist(): number;
}

class Point implements IPoint{
    constructor(public x: number, public y: number){}
    getDist() { return Math.sqrt(this.x * this. x + this.y); }
}

var p: IPoint = new Point(3,4);
var dist = p.getDist();
toastr.info('distance = ' + dist); 