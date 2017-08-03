import ds = require("./data-service");

var dataservice = new ds.DataService();

export interface IAlerter{
    name: string;
    showMessage(): void
}

export class Alerter implements IAlerter{

    name = 'John';
    showMessage(){
        var msg = dataservice.getMessage();
        toastr.info(msg + ', ' + this.name);
    }
}