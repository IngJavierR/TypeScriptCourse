/// <reference path="../node_modules/@types/knockout/index.d.ts"/>
declare var ko: KnockoutStatic;

module demo_02_04{
    var name = ko.observable('Javier Rodriguez');
    var id = ko.observable(1);

    var guy = {
        id: id,
        fullname: name
    };

    var value: string = guy.fullname();
    console.log(value);
}