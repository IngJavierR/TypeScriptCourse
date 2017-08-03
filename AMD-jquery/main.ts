/// <reference path="../node_modules/@types/requirejs/index.d.ts"/>

declare var require: Require;

require.config({
    baseUrl: '',
    shim:{
        jquery: {
            exports: '$'
        }
    },
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery',
        'toastr': '../bower_components/toastr/toastr',
    }
});

require(['bootstrapper', 'jquery', 'toastr'],
    (bootstrapper, $, toastr) => {
        bootstrapper.run();
    });