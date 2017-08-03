/// <reference path="../node_modules/@types/toastr/index.d.ts"/>
interface IRectangle{
    height: number;
    width: number;
    getArea(): number;
}

namespace Shapes{

    export class Rectangle implements IRectangle{
        constructor(public height: number, public width: number){}
        getArea(){return this.height * this.width}
    }
}

var rect: IRectangle = new Shapes.Rectangle(10, 4);
var area = rect.getArea();
toastr.info('area = ' + area);