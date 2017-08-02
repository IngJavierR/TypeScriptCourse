interface IEngine{

  start(callback: (startStatus: boolean, engineType: string) => void) : void;
  stop(callback: (stopStatus: boolean, engineType: string) => void): void;
}

class Engine implements IEngine{
  constructor(public horsePower: number, public engineType: string){}

  start(callback: (startStatus: boolean, engineType: string) => void){
    window.setTimeout(() =>{
      callback(true, this.engineType);
    })
  }

  stop(callback: (stopStatus: boolean, engineType: string) => void){
    window.setTimeout(() =>{
      callback(true, this.engineType);
    })
  }
}

class CustomEngine implements IEngine{
  constructor(public horsePower: number, public engineType: string){}

  start(callback: (startStatus: boolean, engineType: string) => void){
    window.setTimeout(() =>{
      callback(true, 'Custom engine');
    })
  }

  stop(callback: (stopStatus: boolean, engineType: string) => void){
    window.setTimeout(() =>{
      callback(true, 'Custom engine');
    })
  }
}

class Accessory {
  constructor(public accessoryNumber: number, public title: string){}
}

class Auto {
  private _basePrice: number;
  private _engine: IEngine;
  make: string;
  model: string;
  accessoryList: string;

  constructor(basePrice: number, engine: IEngine, make: string, model: string){
    this.engine = engine;
    this.basePrice = basePrice;
    this.make = make;
    this.model = model;
  }

  calculateTotal(): number{
    var taxRate = .08;
    return this.basePrice + (taxRate * this.basePrice);
  }

  addAccessories(...accesories: Accessory[]){
    this.accessoryList = '';
    accesories.forEach((val) => {
      this.accessoryList += val.accessoryNumber + '' + val.title + '<br/>';
    })
  }

  getAccessoryList(): string{
    return this.accessoryList;
  }

  get basePrice(): number{
    return this._basePrice;
  }

  set basePrice(value: number){
    if(value <= 0) throw 'price must be >= 0';
    this._basePrice = value;
  }

  get engine(): IEngine{
    return this._engine;
  }

  set engine(value: IEngine){
    if(value == undefined) throw 'Please supply an engine';
    this._engine = value;
  }
}

class Truck extends Auto{
    bedLength: string;
    fourByFour: boolean;

    constructor(basePrice: number, engine: Engine, make: string, model: string,
                bedLength: string, fourByFour: boolean){
        super(basePrice, engine, make, model);

        this.bedLength = bedLength;
        this.fourByFour = fourByFour;
    }
}

window.onload = function(){
    var auto = new Auto(40000, new Engine(300, 'V8'), 'Chevy', 'Siverado');
    var myEngine = <Engine>auto.engine;
    alert(myEngine.horsePower.toString());
}