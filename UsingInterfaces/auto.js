var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    Engine.prototype.start = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        });
    };
    Engine.prototype.stop = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        });
    };
    return Engine;
}());
var CustomEngine = (function () {
    function CustomEngine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    CustomEngine.prototype.start = function (callback) {
        window.setTimeout(function () {
            callback(true, 'Custom engine');
        });
    };
    CustomEngine.prototype.stop = function (callback) {
        window.setTimeout(function () {
            callback(true, 'Custom engine');
        });
    };
    return CustomEngine;
}());
var Accessory = (function () {
    function Accessory(accessoryNumber, title) {
        this.accessoryNumber = accessoryNumber;
        this.title = title;
    }
    return Accessory;
}());
var Auto = (function () {
    function Auto(basePrice, engine, make, model) {
        this.engine = engine;
        this.basePrice = basePrice;
        this.make = make;
        this.model = model;
    }
    Auto.prototype.calculateTotal = function () {
        var taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice);
    };
    Auto.prototype.addAccessories = function () {
        var _this = this;
        var accesories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accesories[_i] = arguments[_i];
        }
        this.accessoryList = '';
        accesories.forEach(function (val) {
            _this.accessoryList += val.accessoryNumber + '' + val.title + '<br/>';
        });
    };
    Auto.prototype.getAccessoryList = function () {
        return this.accessoryList;
    };
    Object.defineProperty(Auto.prototype, "basePrice", {
        get: function () {
            return this._basePrice;
        },
        set: function (value) {
            if (value <= 0)
                throw 'price must be >= 0';
            this._basePrice = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Please supply an engine';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    return Auto;
}());
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck(basePrice, engine, make, model, bedLength, fourByFour) {
        var _this = _super.call(this, basePrice, engine, make, model) || this;
        _this.bedLength = bedLength;
        _this.fourByFour = fourByFour;
        return _this;
    }
    return Truck;
}(Auto));
window.onload = function () {
    var auto = new Auto(40000, new Engine(300, 'V8'), 'Chevy', 'Siverado');
    var myEngine = auto.engine;
    alert(myEngine.horsePower.toString());
};
//# sourceMappingURL=auto.js.map