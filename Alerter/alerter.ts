/// <reference path="../node_modules/@types/toastr/index.d.ts"/>
/// <reference path="data-service.ts"/>

interface IAlerter{
    name: string;
    showMessage(): void
}

var dataservice = new DataService();

class Alerter implements IAlerter{

    name = 'John';
    showMessage(){
        var msg = dataservice.getMessage();
        toastr.info(msg + ', ' + this.name);
    }
}