/// <reference path="../node_modules/@types/requirejs/index.d.ts"/>
require.config({
    baseUrl: '',
    shim: {
        jquery: {
            exports: '$'
        }
    },
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery',
        'toastr': '../bower_components/toastr/toastr',
    }
});
require(['bootstrapper', '$', 'toastr'], function (bootstrapper, $, toastr) {
    bootstrapper.run();
});
//# sourceMappingURL=main.js.map