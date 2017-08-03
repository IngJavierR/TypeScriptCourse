/// <reference path="../node_modules/@types/toastr/index.d.ts"/>
/// <reference path="../node_modules/@types/jquery/index.d.ts"/>

import ds = require("./data-service");

declare var toastr: Toastr;
declare var $: JQueryStatic;

var dataservice = new ds.DataService();

export interface IAlerter{
    name: string;
    showMessage(): void
}

export class Alerter implements IAlerter{

    name = 'John';
    showMessage(){
        var msg = dataservice.getMessage();
        $("#messagebox").text(msg + ', ' + this.name);
        toastr.info(msg + ', ' + this.name);
    }
}